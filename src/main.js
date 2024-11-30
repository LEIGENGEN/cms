import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import Router from "./router";
import "@/styles/app.less"; // 后台装修搭建系统公共CSS

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount("#app");
