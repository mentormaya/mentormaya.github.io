import React from "react";
import { Separator } from "../ui/separator";
import { Post, allPosts as posts } from "@/.contentlayer/generated";
import Link from "next/link";

interface Props {
  tags?: string[];
  slug?: string;
}

const RelatedPosts = ({ tags, slug }: Props) => {
  const relatedPosts = posts
    .filter((post) => {
      return post?.tags?.some((tag) => tags?.includes(tag));
    })
    .filter((post) => post.slug !== slug);

  if (!relatedPosts.length) return null;

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-lg">Related Posts</h2>
      <Separator className="bg-zinc-600/60" />
      <ul className="flex flex-col gap-2 mt-4">
        {relatedPosts.map((post: Post) => (
          <li
            key={post.slug}
            className="text-md font-normal text-zinc-400 hover:text-white duration-1000"
          >
            <Link href={`/blog/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RelatedPosts;
