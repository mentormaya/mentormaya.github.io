module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // This will lint and format TypeScript and                                             //JavaScript files
  "**/*.(ts|tsx|js)": () => [`npm run lint:fix .`, `npm run format .`],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": filenames => `npm run format ${filenames.join(" ")}`,
};
