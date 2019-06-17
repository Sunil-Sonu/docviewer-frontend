import Vue from 'vue'
import Buefy from 'buefy';
import App from './App.vue'
import router from './router'
import store from './store'

import 'font-awesome/css/font-awesome.css'
import './styles/app.scss'

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
