import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/app/ui/layout/index.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',  // Enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/app/ui/views/Login/index.vue'),
      meta: { hidden: true },
    },
    {
      path: '/',
      component: Layout ,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/app/ui/views/Dashboard/index.vue'),
          meta: {
            title: 'Dashboard',
            icon: 'tachometer-alt',
          },
        },
      ],
    },
    {
      path: '/userlist',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'about',
          component: () => import('@/app/ui/views/User/index.vue'),
          meta: {
            title: 'User',
            icon: 'users',
          },
        },
      ],
    },
    {
      path: '/notification',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'notification',
          component: () => import('@/app/ui/views/Notification/index.vue'),
          meta: {
            title: 'Notification',
            icon: 'users',
          },
        },
      ],
    },
    {
      path: '/material-menu',
      component: Layout,
      redirect: '/material-menu/training-materials',
      meta: {
        title: 'Material',
        icon: 'users-cog',
      },
      children: [
        {
          path: 'training-materials',
          component: () => import('@/app/ui/views/MaterialMenu/TrainingMaterials/index.vue'),
          meta: {
            title: 'Training Materials',
          },
        },
        {
          path: 'quick-guide',
          component: () => import('@/app/ui/views/MaterialMenu/QuickGuide/index.vue'),
          meta: {
            title: 'Quick Guide',
          },
        },
        {
          path: 'salesman-bulletin',
          component: () => import('@/app/ui/views/MaterialMenu/SalesmanBulletin/index.vue'),
          meta: {
            title : 'Salesman Bulletin',
          },
        },
        {
          path: 'aditional-info',
          component: () => import('@/app/ui/views/MaterialMenu/AditionalInfo/index.vue'),
          meta: {
            title: 'Aditional Info',
          },
        },
      ],
    },
    {
      path: '/content-management',
      component: Layout,
      redirect: 'content-management/home-banner',
      meta: {
        title: 'Content',
        icon: 'users-cog',
      },
      children: [
        {
          path: 'home-banner',
          component: () => import('@/app/ui/views/ContentManagement/HomeBanner/index.vue'),
          meta: {
            title: 'Home Banner',
          },
        },
        {
          path: 'diclaimer',
          component: () => import('@/app/ui/views/ContentManagement/FAQ/index.vue'),
          meta: {
            title: 'Frequence Ask Question',
          },
        },
        {
          path: 'faq',
          component: () => import('@/app/ui/views/ContentManagement/ProfilePopup/index.vue'),
          meta: {
            title: 'Profile Popup Messages',
          },
        },
        {
          path: 'popup',
          component: () => import('@/app/ui/views/ContentManagement/Disclaimer/index.vue'),
          meta: {
            title: 'Disclaimer',
          },
        },
      ],
    },
    {
      path: '/report',
      component: Layout,
      redirect: 'report/user-report',
      meta: {
        title: 'Report',
        icon: 'users-cog',
      },
      children: [
        {
          path: 'user-report',
          component: () => import('@/app/ui/views/Report/UserReport/index.vue'),
          meta: {
            title: 'User Report',
          },
        },
        {
          path: 'notification-report',
          component: () => import('@/app/ui/views/Report/NotificationReport/index.vue'),
          meta: {
            title: 'Notification Report',
          },
        },
        {
          path: 'training-report',
          component: () => import('@/app/ui/views/Report/TrainingMaterialReport/index.vue'),
          meta: {
            title: 'Training Material Report',
          },
        },
        {
          path: 'quick-report',
          component: () => import('@/app/ui/views/Report/QuickGuideReport/index.vue'),
          meta: {
            title: 'Quick Guide Report',
          },
        },
        {
          path: 'salesman-report',
          component: () => import('@/app/ui/views/Report/SalesmanBuletinReport/index.vue'),
          meta: {
            title: 'Salesman Bulletin Report',
          },
        },
      ],
    },
    {
      path: '/master-car',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'master-car',
          component: () => import('@/app/ui/views/MasterCar/index.vue'),
          meta: {
            title: 'Master Car',
            icon: 'users',
          },
        },
      ],
    },
    {
      path: '/cms',
      component: Layout,
      redirect: '/cms/admin',
      meta: {
        title: 'Admin Setting',
        icon: 'users-cog',
      },
      children: [
        {
          path: 'admin',
          component: () => import('@/app/ui/views/AdminSetting/AdminCMS/index.vue'),
          meta: {
            title: 'Admin CMS',
          },
        },
        {
          path: 'role',
          component: () => import('@/app/ui/views/AdminSetting/AdminCMSRole/index.vue'),
          meta: {
            title: 'Admin CMS Role',
          },
        },
      ],
    },
    {
      path: '/profile',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Profile',
          component: () => import('@/app/ui/views/Profile/index.vue'),
        },
      ],
    },
  ],
});
