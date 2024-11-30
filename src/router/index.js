import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";

Vue.use(Router);

const constantRoutes = [
  {
    path: "/",
    component: Layout,
    meta: { title: "layout", hidden: false },
  },
];

export default new Router({
  routes: constantRoutes,
});
