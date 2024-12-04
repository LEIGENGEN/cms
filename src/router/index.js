import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";

Vue.use(Router);

const constantRoutes = [
  {
    path: "/",
    component: Layout,
    meta: { title: "layout", hidden: false },
    children: [
      {
        path: "/home",
        meta: { title: "首页" },
        component: () => import("@/pages/home/index.vue"),
      },
      {
        path: "/activity",
        meta: { title: "活动管理", breadcrumb: true },
        component: () => import("@/pages/activity/index.vue"),
      },
    ],
  },
];

export default new Router({
  routes: constantRoutes,
});
