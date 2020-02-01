import Vue from "vue";
import App from "./App.vue";
import Header from "./Header.vue";
import ServerRows from "./ServerRows.vue";
import ServerManager from "./ServerManager.vue";

Vue.component("header-components", Header);
Vue.component("server-rows", ServerRows);
Vue.component("server-manager", ServerManager);
new Vue({
  el: "#app",
  render: h => h(App)
});
