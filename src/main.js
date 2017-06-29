import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import useI18 from './i18n/index'
import BreadCrumbs from './components/breadcrumbs/index';
import './style.scss'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(iView);
Vue.use(BreadCrumbs);
useI18();
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});
const store = new Vuex.Store({
  state: {
    local: Vue.config.lang
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
