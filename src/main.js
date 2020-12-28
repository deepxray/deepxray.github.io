import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import i18n from '@/common/i18n';
import '@/assets/styles/normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/common.less';
import '@/assets/styles/mobile.less';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Element);

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
