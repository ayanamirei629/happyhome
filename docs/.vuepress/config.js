// import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

// .vuepress/config.js
module.exports = 
{
  plugins: [
    '@vuepress/google-analytics',
      {
        'ga': 'UA-249207582-1' // UA-00000000-0
      }
  ],
  title: '快乐老家速写室',
  description: '多一份FF14的热爱',
  // logo: '/assets/img/logo.png',
  // activeHeaderLinks: false,
  // base: "/ayanamirei629.github.io/",
  themeConfig: 
  {
    searchPlaceholder: '画师名称',
    lastUpdated: 'Last Updated',
    // logo: '/assets/img/logo.png',
    nav: 
    [
      { text: "首页", link: "/", icon: "creative" },
      {
        text: "地区",
        icon: "info",
        items: [
          {
            text: "中国",
            link: "https://craighu.gitee.io",
            target:'_self', rel:false
          },
          {
            text: "海外",
            link: "https://www.ffhome.vip/",
            target:'_self', rel:false
          },
          {
            text: "更新计划",
            icon: "plugin",
            items: [
              {
                text: "Released Update",
                link: "/update/update",
                
              },
              {
                text: "Planned Update",
                link: "/update/plan",
              },
            ],
          },
        ],
      },
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
        path: "/event/box_event_info",
        collapsable: false,  // 是否折叠
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          { title: "明盒盲盒活动" , path: "/event/box_event_info", collapsable: false, 
          children:[
            { title: "本次活动画师" , path: "/event/box_event_cur"}
          ]},
          // { title: "圣诞节活动" , path: "/event/christmas_event"},
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
      // {
      //   title: "活动时间表",
      //   path: "/eventing/event_now",
      //   collapsable: false,  // 是否折叠
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     { title: "活动信息" , path: "/eventing/event_now"},
      //   ],
      // },
    ],
    smoothScroll: true,
    // editLinkText: 'Help us improve this page!'
  },
};



