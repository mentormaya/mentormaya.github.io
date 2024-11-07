export const slugify = (text: string) =>
  text.toLowerCase().replace(/ /g, "-").replaceAll(".", "");

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 150; // Average reading speed
  const words = content.split(/\s+/).length; // Split by whitespace and count words
  const minutes = Math.ceil(words / wordsPerMinute); // Calculate total minutes (rounded up)
  return `${minutes} ${minutes > 1 ? " mins " : " min "} read`;
};

export const sortAlpha = (a: string, b: string) => a.localeCompare(b);

export const sortSlugAlpha = (a: { slug: string }, b: { slug: string }) =>
  a.slug.localeCompare(b.slug);

export const sortSlugCount = (a: { count: number }, b: { count: number }) =>
  b.count - a.count;

export const initials = (name: string) => {
  const [first, last] = name.split(" ");
  return `${first.charAt(0)}${last ? last.charAt(0) : ""}`;
};
