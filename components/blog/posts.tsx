import Link from "next/link";
import { Contact, NotebookPen, NotepadText, Tag } from "lucide-react";

import { calculateReadingTime, formatDate, slugify } from "@/lib/strings";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Post } from "@/.contentlayer/generated";

interface Props {
  posts: Post[];
}

const PostsSection = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 w-full justify-center items-center">
      {posts.map((post) => (
        <article
          className="flex flex-col gap-4 border border-zinc-600/60 rounded p-4"
          key={post.slug}
        >
          <div className="flex justify-between text-sm">
            <div className="flex gap-1">
              {post.tags?.map((tag) => (
                <Link href={`/blog/tag/${slugify(tag)}`} key={tag}>
                  <div
                    className="flex gap-1 justify-between pt-1 bg-zinc-600/60 border border-slate-600/60 hover:bg-purple-500/60 px-2 rounded text-white transition duration-1000"
                    key={tag}
                  >
                    <Tag className="h-3 w-3" />
                    <span className="leading-4">{tag}</span>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-muted-foreground">
              {calculateReadingTime(post.body.raw)}
            </p>
          </div>
          <Link href={`/blog/post/${post.slug}`}>
            <h2 className="text-2xl hover:text-purple-500 transition duration-1000">
              {post.title}
              <span className="block text-sm text-muted-foreground">
                {post.excerpt}
              </span>
            </h2>
          </Link>
          <p className="text-slate-300 line-clamp-3">{post.body.raw}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-sm">
              <p className="flex gap-1">
                <Contact size={16} />
                {post.author}
              </p>
              <p className="flex gap-1">
                <NotebookPen size={16} />
                {formatDate(post.created_at)}
              </p>
              <p className="flex gap-1">
                <NotepadText size={16} />
                {formatDate(post.updated_at)}
              </p>
            </div>
            <Link href={`/blog/post/${post.slug}`}>
              <button
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full text-sm hover:bg-transparent hover:text-purple-500 transition duration-1000"
                )}
              >
                Read more <span className="px-2 pt-1">→</span>
              </button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostsSection;
