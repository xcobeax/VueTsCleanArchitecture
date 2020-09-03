import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import BootstrapVue from 'bootstrap-vue';
import ElementUI from 'element-ui';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';
import { AppComponent } from './app/framework/di/AppComponents';
import 'normalize.css';
import '@/app/ui/styles/element-variables.scss';
import '@/app/ui/styles/index.scss';
import '@/app/ui/styles/_variables.scss';

Vue.use(BootstrapVue);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.component('tag-icon', Icon);

AppComponent.init();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
