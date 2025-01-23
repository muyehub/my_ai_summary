import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "My Ai Distill",
  description: "Ai Knowledge Summary For Me",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '随笔', link: '/markdown-examples' }
    ],

    sidebar: {
      "/": [
      {
        text: '随笔',
        collapsed: true,
        items: [
          { text: 'Markdown 案例', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/muyehub' }
    ]
  },
  vite: {
    server: {
      hmr: true
    }
  }
})
