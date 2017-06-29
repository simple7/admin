import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        breadcrumb: 'home'
      },
      component: resolve => require(['../pages/Home.vue'], resolve),
      redirect: {path: '/login'},
      children: [
        {
          path: '/index',
          name: 'index',
          component: resolve => require(['../pages/Index.vue'], resolve)
        },

        /*******************************************Scene*******************************************************/
        {
          path: '/aSceneManage',
          name: 'sceneManage',
          meta: {
            breadcrumb: 'sceneManage'
          },
          component: resolve => require(['../pages/SenceManage.vue'], resolve)
        },

        /*******************************************Project*****************************************************/
        {
          path: '/bOwnCreate',
          name: 'ownCreate',
          meta: {
            breadcrumb: 'ownCreate'
          },
          component: resolve => require(['../pages/SenceManage.vue'], resolve)
        }

      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['../pages/Login.vue'], resolve)
    }
  ]
})
