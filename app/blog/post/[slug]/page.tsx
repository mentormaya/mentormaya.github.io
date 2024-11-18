import { MDX } from "@/components/mdx";
import { Post, allPosts as posts } from "@/.contentlayer/generated";
import { calculateReadingTime, slugify } from "@/lib/strings";
import { Tag } from "lucide-react";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

const BlogPage = ({ params }: Props) => {
  const { slug } = params;
  const post = posts.find((post: Post) => post.slug === slug);
  return (
    <main className="w-full flex flex-1 flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl tracking-wide leading-8">{post?.title}</h1>
        <div className="flex gap-1 justify-end pt-1 px-1 rounded text-muted-foreground text-nowrap flex-wrap">
          <p className="text-muted-foreground tracking-normal">
            {calculateReadingTime(post ? post.body.raw : "")}
          </p>
          {post?.tags?.map((tag) => (
            <Link
              href={`/blog/tag/${slugify(tag)}`}
              key={tag}
              className="flex gap-1 p-1 hover:text-white transition duration-1000"
            >
              <Tag className="h-3 w-3" />
              <span className="leading-4 text-sm">{tag}</span>
            </Link>
          ))}
        </div>
      </div>
      <p className="text-muted-foreground tracking-normal">{post?.excerpt}</p>
      <MDX source={post?.body.raw} />
    </main>
  );
};

export default BlogPage;
