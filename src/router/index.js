import Vue from 'vue'
import Router from 'vue-router'
import ImgShow from '@/components/show/Show'
import Index from '@/components/cfg'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "Index",
    //   component: Index
    // },
    {
        path: "/",
        name: "Index",
        component: Index
    },
    {
        path: "/show/show",
        name: "ImgShow",
        component: ImgShow
    }
  ]
});

