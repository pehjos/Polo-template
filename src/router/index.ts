// routes to pages
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "reset-password" */ "..//components/page-components/AboutComponent.vue"),
    meta: {
      allowAnonymous: true,
      layout: "blank",
      permissions: [],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
