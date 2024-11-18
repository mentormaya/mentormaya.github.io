import { angelina } from "@/components/local-fonts";
import { allPosts as posts } from "@/.contentlayer/generated";
import TagsSection from "@/components/blog/tags";
import PostsSection from "@/components/blog/posts";
import { cn } from "@/lib/utils";

const BlogPage = () => {
  return (
    <main className="mt-20 flex flex-1 flex-col gap-12 justify-center items-center">
      {/* heading */}
      <div className="flex justify-center items-center">
        <h1 className={cn("text-5xl", angelina.className)}>
          Find my
          <span className="text-purple-500 px-2">Blogs</span>
          here
        </h1>
      </div>
      {/* Tags */}
      <TagsSection />
      {/* Posts */}
      <PostsSection posts={posts} />
    </main>
  );
};

export default BlogPage;
