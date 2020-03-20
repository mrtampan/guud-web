import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '*',
      redirect: { name: 'Guud' }
    },
    {
      path: '/',
      redirect: { name: 'Guud' }
    },
    {
      path: '/guud',
      name: 'Guud',
      redirect: '/guud/beranda',
      component: () => import('@/components/template/'),
      children: [
        {
          path: 'beranda',
          name: 'Beranda',
          component: () => import('@/components/beranda')
        },
        {
          path: 'view-beranda/:id?',
          name: 'ViewBeranda',
          component: () => import('@/components/view-beranda')
        }
      ]
    },
    {
      path: '/guud/login',
      name: 'login',
      component: () => import('@/components/sign/login')
    },
    {
      path: '/guud/register/:var?',
      name: 'register',
      component: () => import('@/components/sign/register')
    },
    {
      path: '/guud/advertiser',
      name: 'AdvertiserManage',
      component: () => import('@/components/advertiser'),
      redirect: '/guud/advertiser/listdata',
      children: [
        {
          path: 'listdata',
          name: 'ListData',
          component: () => import('@/components/advertiser/posting-list')
        },
        {
          path: 'addedit/:id?',
          name: 'AddEdit',
          component: () => import('@/components/advertiser/posting-add-edit')
        },
        {
          path: 'perusahaanedit',
          name: 'PerusahaanEdit',
          component: () => import('@/components/advertiser/perusahaan-edit')
        }
      ]
    }
  ]
})
