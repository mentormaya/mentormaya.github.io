import RightSideBar from "./r-side";
import LeftSideBar from "./l-side";
import { Post, allPosts as posts } from "@/.contentlayer/generated";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return posts.map((post: Post) => ({ slug: post.slug }));
}

export default function ProjectsLayout({ children, params }: Props) {
  const { slug } = params;
  const post = posts.find((post: Post) => post.slug === slug);
  return (
    <>
      <div className="h-[calc(100dvh-6.55rem)] sticky top-12 w-[20%] max-w-[24rem] items-center pt-4 overflow-y-auto">
        <LeftSideBar post={post} />
      </div>
      {children}
      <div className="h-[calc(100dvh-6.55rem)] sticky top-12 w-[25%] max-w-[24rem] items-center pt-4 overflow-y-auto">
        <RightSideBar tags={post?.tags} slug={slug} />
      </div>
    </>
  );
}
