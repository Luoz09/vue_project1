import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/Index'),
      children: [
        {
          path: '/',
          name: 'Home', 
          component: () => import('@/components/Home')
        },
        {
          path: 'Top',
          name: 'Top', 
          component: () => import('@/components/Top')
        },
        {
          path: 'ShopCar',
          name: 'ShopCar', 
          component: () => import('@/components/ShopCar')
        },
        
        {
          path: 'Center',
          name: 'Center', 
          component: () => import('@/components/Center')
        },
      ],
    },
    {
      path: '/ContentDetails',
      name: 'ContentDetails', 
      component: () => import('@/components/ContentDetails')
    }, 
   
  ]
})
