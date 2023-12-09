/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\Yingge Hu\\Desktop\\github\\ffhome\\t11\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-1a755618",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1a755618").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-5ad619d4",
    path: "/drawer/list.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5ad619d4").then(next)
    },
  },
  {
    name: "v-b1c8d44c",
    path: "/event/box_event_cur.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b1c8d44c").then(next)
    },
  },
  {
    name: "v-5f82029a",
    path: "/event/christmas_event.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5f82029a").then(next)
    },
  },
  {
    name: "v-12f68e8e",
    path: "/event/box_event_info.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-12f68e8e").then(next)
    },
  },
  {
    name: "v-5fe308ac",
    path: "/eventing/event_now.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5fe308ac").then(next)
    },
  },
  {
    name: "v-97d799b2",
    path: "/guide.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-97d799b2").then(next)
    },
  },
  {
    name: "v-20b94b98",
    path: "/update/plan.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-20b94b98").then(next)
    },
  },
  {
    name: "v-29a8a918",
    path: "/update/update.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-29a8a918").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]