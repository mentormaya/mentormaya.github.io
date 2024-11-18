// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    excerpt: { type: "string", required: false },
    author: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
    slug: { type: "string", required: true },
    created_at: { type: "string", required: true },
    updated_at: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Post],
});
