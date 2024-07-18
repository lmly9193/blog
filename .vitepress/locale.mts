import { UserConfig, DefaultTheme } from 'vitepress';
import { merge } from 'lodash-es';

export default function (config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config> {
  return merge(config, {
    locales: {
      root: {
        label: '中文(台灣)',
        lang: 'tw',
      },
    },

    themeConfig: {
      lastUpdatedText: '最後更新時間',

      docFooter: {
        prev: '上一篇',
        next: '下一篇',
      },

      search: {
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: '搜尋',
                  buttonAriaLabel: '搜尋',
                },
                modal: {
                  noResultsText: '沒有找到結果',
                  resetButtonTitle: '重置搜尋',
                  footer: {
                    selectText: '選擇',
                    navigateText: '導航',
                    closeText: '關閉',
                  },
                },
              },
            },
          },
        },
      },
    },
  });
}
