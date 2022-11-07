// import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

// .vuepress/config.js
module.exports = 
{
  // plugins: [
  //   backToTopPlugin(),
  // ],
  title: '快乐老家速写室',
  description: '多一份FF14的热爱',
  base: "/",
  themeConfig: 
  {
    nav: 
    [
      { text: "首页", link: "/", icon: "creative" },
      //{ text: "配置", link: "/config/", icon: "config" },
      //{ text: "常见问题", link: "https://www.baidu.com/", icon: "question" },
      // {
      //   text: "画师活动",
      //   icon: "info",
      //   prefix: "/zh/basic/",
      //   items: [
      //     { text: "Markdown", link: "markdown/", icon: "markdown" },
      //     { text: "VuePress", link: "vuepress/", icon: "vue" },
      //   ],
      // },
      // {
      //   text: "项目",
      //   icon: "info",
      //   items: [
      //     {
      //       text: "GITLAB地址",
      //       link: "https://gitlab.datacvg.com/",
      //     },
      //     {
      //       text: "项目地址",
      //       link: "https://gitlab.datacvg.com/",
      //     },
      //     {
      //       text: "GIT部署",
      //       link: "https://juejin.cn/post/6844904071535525901",
      //     },
      //     {
      //       text: "插件",
      //       icon: "plugin",
      //       items: [
      //         {
      //           text: "插件1",
      //           link: "a",
      //         },
      //         {
      //           text: "插件2",
      //           link: "b",
      //         },
      //         {
      //           text: "插件3",
      //           link: "c",
      //         },
      //         {
      //           text: "插件4",
      //           link: "d",
      //         },

      //       ],
      //     },
      //   ],
      // },
    ],
    // sidebar: 'auto',
    
    sidebar: [
      {
        title: "快乐老家画室",
        collapsable: true,  // 是否折叠
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          { title: "画室介绍", path: "/"},
        ],
      },
      {
        title: "画室活动",
        path: "/event/box_event",
        collapsable: false,  // 是否折叠
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          { title: "明盒盲盒活动" , path: "/event/box_event"},
        ],
      },
      {
        title: "画师介绍（名字按字母排序）",
        path: "/drawer/list",
        collapsable: false,  // 是否折叠
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          { title: "画师" , path: "/drawer/list"},
        ],
      },

    ],
    smoothScroll: true,
    // editLinkText: 'Help us improve this page!'
  },
};



