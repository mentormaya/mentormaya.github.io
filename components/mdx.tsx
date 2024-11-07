// components/mdx-remote.js
import { options } from "@/lib/mdxOptions";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import { components } from "./mdx-components";

export function MDX(props: any) {
  return (
    <Suspense fallback={<>Loading Contents...</>}>
      <article className="py-6 mx-auto prose prose-zinc prose-quoteless max-w-full p-12 border rounded border-zinc-600/60">
        <MDXRemote
          {...props}
          options={options}
          components={{ ...components, ...(props.components || {}) }}
        />
      </article>
    </Suspense>
  );
}
