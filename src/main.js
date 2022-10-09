import axios from "axios";
import "sweetalert2/dist/sweetalert2.min.css";
import Toaster from "v-toaster";
import "v-toaster/dist/v-toaster.css";
import Vue from "vue";
import VueAxios from "vue-axios";
import VueSweetalert2 from "vue-sweetalert2";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
Vue.use(VueSweetalert2);
/*import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
 Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider); */
Vue.use(VueAxios, axios,);
Vue.use(Toaster, { timeout: 5000 });
Vue.config.productionTip = false;
new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
