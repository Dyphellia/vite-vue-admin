import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { routerList } from "@/router/basic";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /**
         {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        icon: "Plus",
        title: "测试一",
      },
      children: [
        {
          path: "/1",
          name: "1",
          component: () => import("@/views/HomeView.vue"),
          meta: {
            icon: "Plus",
            title: "测试1",
            hidden: false,
          },
        },
        {
          path: "/2",
          name: "2",
          component: () => import("@/views/HomeView.vue"),
          meta: {
            icon: "Plus",
            title: "测试2",
            hidden: false,
          },
        },
        {
          path: "/3",
          name: "3",
          component: () => import("@/views/HomeView.vue"),
          meta: {
            icon: "Plus",
            title: "测试3",
            hidden: false,
          },
        },
      ],
    },
         {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
      meta: {
        icon: "test",
        title: "test",
      },
    },
         **/
    ...routerList,
  ],
});

export default router;
