import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ares' Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '八股文', link: '/Interviews' },
      { text: '项目', link: '/Interviews' },
      { text: '题解', link: '/Interviews' },
      { text: '碎碎念', link: '/Interviews' },
    ],

    sidebar: [
      {
        text: '八股文整理',
        items: [
          { text: 'Interviews', link: '/Interviews' }
        ]
      },
      {
        text: '项目整理',
        items: [
          { text: 'Interviews', link: '/Interviews' }
        ]
      },
      {
        text: '题解',
        items: [
          { text: 'Interviews', link: '/Interviews' }
        ]
      },
      {
        text: '碎碎念',
        items: [
          { text: 'Interviews', link: '/Interviews' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bunnyoii' }
    ]
  }
})
