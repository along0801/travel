import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 解决移动端 300ms 点击延迟的插件
import fastClick from 'fastclick';
import "./assets/styles/reset.css";

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
