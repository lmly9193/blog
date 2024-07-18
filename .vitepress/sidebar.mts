import { generateSidebar } from 'vitepress-sidebar';

export default generateSidebar([
  {
    scanStartPath: 'src/notes',
    resolvePath: '/notes/',
    useFolderTitleFromIndexFile: true,
    useTitleFromFrontmatter: true,
    collapsed: true,
    sortMenusByName: true,
  },
  {
    scanStartPath: 'src/cheatsheets',
    resolvePath: '/cheatsheets/',
    collapsed: true,
  },
]);
