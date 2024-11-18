import { slugify } from "@/lib/strings";
import { allPosts } from "@/.contentlayer/generated";

export type Tag = {
  label: string;
  slug: string;
  count: number;
};

export const getTags = (): Tag[] => {
  const tagMap: { [key: string]: number } = {};

  allPosts
    .map((post) => post.tags)
    .flat()
    .forEach((tag) => {
      if (tag) tagMap[tag] = (tagMap[tag] || 0) + 1;
    });

  return Object.keys(tagMap).map((tag) => ({
    label: tag,
    slug: slugify(tag),
    count: tagMap[tag],
  }));
};
