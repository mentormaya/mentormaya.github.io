import { allPosts as posts } from "@/.contentlayer/generated";
import { getTags, type Tag } from "@/data/blog";
import TagsSection from "@/components/blog/tags";
import PostsSection from "@/components/blog/posts";

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  const tags = getTags();
  return tags.map((tag) => ({ tag: tag.slug }));
}

const Circle = () => {
  return <div className="h-12 w-12 bg-green-500/60 rounded-full" />;
};

const TagsPage = ({ params }: Props) => {
  const tags = getTags();
  const tag = tags.find((tag) => tag.slug === params.tag);
  const filteredPosts = tag
    ? posts.filter((post) => post?.tags?.includes(tag.label))
    : posts;
  return (
    <main className="mt-20 flex flex-1 flex-col gap-12 justify-center items-center">
      {/* heading */}
      <div className="flex justify-center items-center">
        <h1 className="text-5xl">
          Find my
          <span className="text-purple-500 px-2">{tag?.label} Blogs</span>
          here
        </h1>
      </div>
      {/* Tags */}
      <TagsSection />
      {/* Posts */}
      <PostsSection posts={filteredPosts} />
    </main>
  );
};

export default TagsPage;
