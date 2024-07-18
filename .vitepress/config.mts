import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hant',
  title: 'lmly9193',
  description: 'A VitePress Site',
  srcDir: 'src',
  lastUpdated: true,
  locales: {
    root: { label: '中文(台灣)', ...localize() },
  },
  themeConfig: {
    nav: nav(),

    search: {
      provider: 'local',
      options: {
        locales: {
          ...localizeSearch(),
        },
      },
    },

    sidebar: autoSidebar(),

    socialLinks: [{ icon: 'github', link: 'https://github.com/lmly9193' }],
  },
});

// https://vitepress.dev/reference/default-theme-nav
function nav() {
  return [
    { text: '首頁', link: '/' },
    { text: '閱讀', link: '/readings' },
    { text: '筆記', link: '/notes' },
    { text: '導航', link: '/awesomes' },
  ];
}

// https://vitepress.dev/reference/default-theme-sidebar
// https://vitepress-sidebar.jooy2.com/
function autoSidebar() {
  return generateSidebar([
    {
      scanStartPath: 'src/notes',
      resolvePath: '/notes/',
      useFolderTitleFromIndexFile: true,
      useTitleFromFrontmatter: true,
      collapsed: true,
      sortMenusByName: true,
    }
  ]);
}

// https://vitepress.dev/guide/i18n
function localize() {
  return defineConfig({
    themeConfig: {
      editLink: {
        pattern: 'https://github.com/lmly9193/blog/edit/main/src/:path',
        text: '編輯此頁面',
      },
      footer: {
        message: 'MIT License',
        copyright: `版權所有 © ${new Date().getFullYear()} lmly9193`,
      },
      docFooter: {
        prev: '上一篇',
        next: '下一篇',
      },
      outline: {
        label: '頁面導航',
      },
      lastUpdated: {
        text: '最後更新時間',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium',
        },
      },
      langMenuLabel: '多語言',
      returnToTopLabel: '回到頂部',
      sidebarMenuLabel: '選單',
      darkModeSwitchLabel: '主題',
      lightModeSwitchTitle: '切換到淺色模式',
      darkModeSwitchTitle: '切換到深色模式',
    },
  });
}

// https://vitepress.dev/reference/default-theme-search
function localizeSearch() {
  return {
    root: {
      translations: {
        button: {
          buttonText: '搜尋',
          buttonAriaLabel: '搜尋',
        },
        modal: {
          footer: {
            selectText: '選擇',
            navigateText: '切換',
            closeText: '關閉',
          },
        },
      },
    },
  };
}
