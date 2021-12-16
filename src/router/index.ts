import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('@/pages/home.vue') },
    {
      path: "/home",
      name: "home",
      alias: "/",
      component: () => import("@/pages/home.vue")
    },
    {
      path: "/about",
      name: "hbout",
      alias: "/",
      component: () => import("@/pages/about.vue")
    },
  ]
});




export default router
