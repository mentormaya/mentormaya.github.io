import { compileMDX } from "next-mdx-remote/rsc";

import { Separator } from "@/components/ui/separator";
import { Post } from "@/.contentlayer/generated";
import { getTOC, TOCItem } from "@/lib/posts";
import TOCList from "@/components/blog/toc-list";

interface Props {
  post: Post | undefined;
}

interface TOCProps {
  toc: TOCItem[];
}

const LeftSideBar = async ({ post }: Props) => {
  const toc = await getTOC(post?.body.raw || "");
  return (
    <aside className="flex flex-col justify-center text-center p-4 border border-zinc-600/60 rounded">
      <section className="flex flex-col gap-2">
        <h2 className="text-lg text-left">Table of Contents</h2>
        <Separator className="bg-zinc-600/60" />
        <TOCList toc={toc} />
      </section>
    </aside>
  );
};

export default LeftSideBar;
