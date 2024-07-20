import { createContentLoader } from 'vitepress';

export default createContentLoader('posts/*.md', {
  transform(raw) {
    return raw
      .filter((item) => item.frontmatter.published !== false)
      .filter((item) => item.frontmatter.date !== undefined)
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
      });
  },
});
