import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Amos Tech",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tools', link: '/tools' }
    ],

    sidebar: [
      {
        text: 'Tools',
        items: [
          // { text: 'Markdown Examples', link: '/tools' },
          { text: '代码自动格式化的配置', link: '/tools/auto-code-format' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiayy860612' }
    ]
  }
})
