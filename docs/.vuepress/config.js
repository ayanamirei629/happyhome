// import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

// .vuepress/config.js
module.exports = 
{
  // plugins: [
  //   backToTopPlugin(),
  // ],
  title: '快乐老家速写室',
  description: '多一份FF14的热爱',
  base: "/ayanamirei629.github.io/",
  themeConfig: 
  {
    nav: 
    [
      { text: "首页", link: "/", icon: "creative" },
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



