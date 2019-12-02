
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/iconfont.css'
import axios from 'axios'
import store from './store'
import MintUI from 'mint-ui';
import moment from 'moment'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


Vue.filter("dateFilter", function(date, formatPattern){
	return moment(date).format(formatPattern || "YYYY-MM-DD HH:mm:ss");
});
Vue.prototype.$axios = axios

axios.interceptors.request.use(function(config){
  MintUI.Indicator.open({
    text:'好歌呈现中......',
    spinnerType:'fading-circle'
  });
  return config
})
axios.interceptors.response.use(function(response){
  MintUI.Indicator.close()
  return response;
});


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// router.beforeEach((to,from,next)=>{
//   // if(to.meta.auth){
//   //   if(localStorage.getItem('user')){
//   //     next()
//   //   }else{
//   //     next({
//   //       path:'/Login'
//   //     })
//   //   }
//   // }else{
//   //   next();
//   // }
// })