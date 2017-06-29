function install (Vue) {
  function getMatchedRoutes (routes) {
    return routes
  }

  // Add the $breadcrumbs property to the Vue instance
  Object.defineProperty(Vue.prototype, '$breadcrumbs', {
    get: function get () {
      var crumbs = []
      var matched = getMatchedRoutes(this.$route.matched)

      matched.forEach(function (route) {
        if (route.meta && route.meta.breadcrumb) {
          crumbs.push(route)
        }
      })
      return crumbs
    }
  })

  // Add a default breadcrumbs component
  Vue.component('breadcrumbs', {
    methods: {
      // Return the correct prop data
      linkProp: function (crumb) {
        // If it's a named route, we'll base the route
        // off of that instead
        if (crumb.name || (crumb.handler && crumb.handler.name)) {
          return {
            name: crumb.name || crumb.handler.name,
            params: this.$route.params
          }
        }
        return {
          path: (crumb.handler && crumb.handler.fullPath)
            ? crumb.handler.fullPath
            : crumb.path,
          params: this.$route.params
        }
      }
    },

    filters: {
      // Display the correct breadcrumb text
      // depending on the Vue version
      crumbText: function (crumb) {
        console.log(crumb.meta.breadcrumb);
          return  crumb.meta.breadcrumb
      }
    },

    template:
    `<ul class="page-breadcrumb" v-if="$breadcrumbs.length">
     <li v-for="(crumb,index) in $breadcrumbs">
     <router-link :to="linkProp(crumb)">{{ $t(crumb.meta.breadcrumb) }}</router-link>
     <span class="ivu-breadcrumb-item-separator" v-if="index < $breadcrumbs.length -1">/</span>
     </li>
     </ul>`

  })
}

export default {
  install: install,
  version: '0.3.1'
}
