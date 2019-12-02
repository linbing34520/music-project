import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Login from '../components/Login'
import Mylove from '../components/Mylove'
import Play from '../components/Play'
import Gedan from '../components/Gedan'
import Me from '../components/Me'
import Plun from '../components/Plun'
import Sigout from '../components/Sigout'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'index',
      component:Index,
    },
    {
      path: '/',
      name: 'index',
      component:Index,
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path:'/Mylove/:id',
      name:'Mylove',
      component:Mylove
    },
    {
      path:'/Play',
      name:'Play',
      component:Play
      
    },
    {
      path:'/Gedan',
      name:'Gedan',
      component:Gedan
    },
    {
      path:'/Me',
      name:'Me',
      component:Me
    },
    {
      path:'/Plun',
      name:'Plun',
      component:Plun
    },
    {
      path:'/Sigout',
      name:'Sigout',
      component:Sigout
    }
  ]
})

