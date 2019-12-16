import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import MintUI from 'mint-ui';
import router from './router';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
// import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';

import 'mint-ui/lib/style.css';
import './assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';

// fastclick.attach(document.body);
Vue.use(MintUI);
Vue.component('icon', Icon);

Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
