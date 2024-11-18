import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "../ui/separator";
import { initials } from "@/lib/strings";
import { resume } from "@/data/resume";
import { Post, allPosts as posts } from "@/.contentlayer/generated";

interface Props {
  slug: string | undefined;
}

const Author = ({ slug }: Props) => {
  if (!slug) return null;
  const post = posts.find((post: Post) => post.slug === slug);
  return (
    <section className="flex flex-col justify-center items-center gap-2 mb-2">
      <h3 className="text-lg font-semibold w-full text-left">Author</h3>
      <Separator className="bg-zinc-500/60" />
      <div className="flex flex-col items-center gap-2 mt-2">
        <Avatar className="h-[8rem] w-[8rem] border-4">
          <AvatarImage src="/images/author.png" />
          <AvatarFallback>
            {initials(post ? post.author : "Author")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h4 className="text-lg font-semibold">{post?.author}</h4>
          <p className="text-sm text-muted-foreground">{resume.position}</p>
          <p className="text-sm text-muted-foreground text-justify">
            {resume.profile}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Author;
