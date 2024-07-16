import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hant',
  title: "lmly9193",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '閱讀', link: '/readings' },
      { text: '筆記', link: '/notes' },
      { text: '速查', link: '/cheatsheets' },
      { text: '導航', link: '/awesomes' },
      { text: '範例', link: '/examples/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      '/readings/': [
        {
          text: 'iThome 鐵人賽',
          link: '/readings/ithome'
        }
      ],

      '/notes': [
        {
          text: '未分類',
          link: '/uncategories/',
        },
      ],

      '/cheatsheets/': [
        {
          text: 'Windows',
          items: [
            { text: 'Markdown Examples', link: '/cheatsheets/' },
            { text: 'Runtime API Examples', link: '/cheatsheets/' }
          ]
        }
      ],

      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown-examples' },
            { text: 'Runtime API Examples', link: '/examples/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lmly9193' }
    ],
  },
})
