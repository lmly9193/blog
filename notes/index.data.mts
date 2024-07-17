import { createContentLoader } from "vitepress";

export default createContentLoader(
  "notes/*/!(index).md" /* options */
);
