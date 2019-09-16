import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 解决移动端 300ms 点击延迟的插件
import fastClick from 'fastclick';
import "./assets/styles/reset.css";

// 引入字体图标 iconfont
import './assets/styles/iconfont.css';

// 引入 mintUI
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
