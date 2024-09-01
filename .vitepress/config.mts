import { defineConfigWithTheme } from 'vitepress'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  name: WZZsBlog
  welcomeText: awa
  motto: awa
  social: { icon: string; url: string }[]

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
  ],
  ignoreDeadLinks: true,
  // 生成站点地图
  // sitemap: {
  //   hostname: 'https://vitepress-theme-bluearchive.vercel.app',
  // },
  title: "Wzz`s Blog",
  description: "Wzz`s Blog",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    name: "位置装的博客",
    welcomeText: 'Hello,World!',
    motto: '与你的日常，就是奇迹',
    social: [
      { icon: 'github', url: 'https://github.com/weizhizhuangwzz' },
    ],

    //footer配置
    footerName: '位置装',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'GitHub Pages', url: 'https://docs.github.com/zh/pages' },
      { name: 'vitepress-theme-bluearchive', url: 'https://github.com/Alittfre/vitepress-theme-bluearchive' }, 
    ],

    //gitalk配置
    clientID: 'Ov23likVC2fwJwCMFRpB',
    clientSecret: 'e144bdd06273f721ab45370c0baf0e42730c26c9',
    repo: 'GitalkForWzzBlog',
    owner: 'weizhizhuangwzz',
    admin: ['weizhizhuangwzz'],
  },
  markdown: {
    theme: 'github-light',
    lineNumbers: true,
    math: true,
  },
})
