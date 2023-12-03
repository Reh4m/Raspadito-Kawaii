import Vue from "vue";
import App from "./App.vue";
import "@babel/polyfill";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import ErrorPage from "vue-error-page";

// errors page
window.eventBus = new Vue();
Vue.use(ErrorPage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
