import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/Home.vue'
import querySelector from '../query/querySelector.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage
      }
    },
    {
      path: '/query/:symbol',
      name: 'queryselector',
      component: querySelector,
      props: true
    }
  ]

})
