
import "babel-polyfill"
import Vue from 'vue'
import axios from './http/http'
import App from './App'
import router from './router'
import bridge from './bridge'
import VeeValidate from './validate'
import {ct} from './util';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css'; 

Vue.prototype.axios = axios.axios;
Vue.prototype.HOST = axios.HOST;
Vue.prototype.bridge = bridge;
Vue.prototype.ct = ct

Vue.use(MintUI);
Vue.use(VeeValidate);
Vue.use(vuescroll);

new Vue({
  el: '#app',
  axios,
  router,
  bridge,
  template: '<App/>',
  components: { App },
  mounted(){
  }
})

