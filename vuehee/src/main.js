import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// fontawsome 관련
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// component 를 전역으로 등록해서 사용
import "./components/index";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
