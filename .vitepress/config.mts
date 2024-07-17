import { defineConfig } from 'vitepress';
import { zh_tw } from './locale.mts';
import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = [
  {
    documentRootPath: 'src',
    scanStartPath: 'notes',
    resolvePath: '/notes/',
    useFolderTitleFromIndexFile: true,
    useTitleFromFrontmatter: true,
    collapsed: true,
    excludeFiles: [],
  },
  {
    documentRootPath: 'src',
    scanStartPath: 'cheatsheets',
    resolvePath: '/cheatsheets/',
    collapsed: true,
    excludeFiles: [],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hant',
  title: 'lmly9193',
  description: 'A VitePress Site',
  srcDir: 'src',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    ...zh_tw['themeConfig'],

    nav: [
      { text: '首頁', link: '/' },
      { text: '閱讀', link: '/readings' },
      { text: '筆記', link: '/notes' },
      { text: '速查', link: '/cheatsheets' },
      { text: '導航', link: '/awesomes' },
      { text: '範例', link: '/examples/markdown-examples' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: zh_tw['search'],
        },
      },
    },

    sidebar: generateSidebar(vitepressSidebarOptions),

    socialLinks: [{ icon: 'github', link: 'https://github.com/lmly9193' }],
  },
});
