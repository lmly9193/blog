import { defineConfig } from 'vitepress';
import localize from './locale.mts';
import autoSidebar from './sidebar.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig(
  localize({
    lang: 'zh-Hant',
    title: 'lmly9193',
    description: 'A VitePress Site',
    srcDir: 'src',
    lastUpdated: true,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config

      nav: [
        { text: '首頁', link: '/' },
        { text: '閱讀', link: '/readings' },
        { text: '筆記', link: '/notes' },
        { text: '速查', link: '/cheatsheets' },
        { text: '導航', link: '/awesomes' },
      ],

      search: {
        provider: 'local',
      },

      outline: {
        label: '本頁導航',
      },

      sidebar: autoSidebar,

      socialLinks: [{ icon: 'github', link: 'https://github.com/lmly9193' }],
    },
  })
);
