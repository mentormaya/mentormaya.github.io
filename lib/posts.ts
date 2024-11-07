import Slugger from "github-slugger";

const slugger = new Slugger();

export type TOCItem = {
  level: number;
  text: string;
  children?: TOCItem[];
};

export const getTOC = async (content: string): Promise<TOCItem[]> => {
  const headings = content.match(/#{1,6} .+/g);
  if (!headings) return [];

  const toc: TOCItem[] = [];
  const stack: TOCItem[] = [];

  headings.forEach((heading) => {
    const level = heading.match(/#/g)?.length || 0;
    const text = heading.replace(/#/g, "").trim();
    const item: TOCItem = { level, text, children: [] };

    while (stack.length && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length === 0) {
      toc.push(item);
    } else {
      const parent = stack[stack.length - 1];
      parent.children = parent.children || [];
      parent.children.push(item);
    }

    stack.push(item);
  });

  return toc;
};

export const generateSlug = (text: string): string => {
  slugger.reset(); // Reset the slugger to ensure unique slugs for each call
  return slugger.slug(text);
};
