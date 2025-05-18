import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Amos Tech",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Guide', link: '/quick-guide' }
    ],

    sidebar: {
      "/quick-guide": [
        {
          text: "Web 开发",
          collapsed: false,
          items: [
            { text: "NextJs 快速入门", link: "/quick-guide/nextjs-guide" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiayy860612' }
    ]
  }
})
