// @ts-ignore
export const routerList = [
  {
    path: "/",
    redirect: "/login",
    meta: { title: "根目录", icon: "Plus", hidden: true },
  },
  {
    path: "/login", // 登陆界面
    name: "Login",
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "登陆", icon: "Plus", hidden: false },
  },
  {
    path: "/download", // 首页
    name: "DownLoad",
    component: () => import("@/views/AboutView.vue"),
    meta: { title: "首页", icon: "Setting", hidden: false },
  },

  {
    path: "/search",
    component: () => import("@/views/AboutView.vue"),
    name: "Search",
    meta: { title: "资源搜索", icon: "el-icon-search", hidden: false },
    children: [
      {
        path: "movie",
        name: "Movie",
        component: () => import("@/views/AboutView.vue"),
        meta: { title: "电影", icon: "el-icon-film", hidden: false },
        children: [
          {
            path: "project",
            name: "Project",
            component: () => import("@/views/AboutView.vue"),
            meta: {
              title: "项目",
              icon: "el-icon-s-opportunity",
              hidden: false,
            },
            children: [
              {
                path: "test1",
                name: "Test1",
                component: () => import("@/views/AboutView.vue"),
                meta: {
                  title: "菜单1",
                  icon: "el-icon-s-opportunity",
                  hidden: false,
                },
                children: [
                  {
                    path: "test3",
                    name: "Test3",
                    component: () => import("@/views/AboutView.vue"),
                    meta: {
                      title: "菜单三",
                      icon: "el-icon-s-opportunity",
                      hidden: false,
                    },
                  },
                ],
              },
              {
                path: "test2",
                name: "Test2",
                component: () => import("@/views/AboutView.vue"),
                meta: {
                  title: "菜单二",
                  icon: "el-icon-s-opportunity",
                  hidden: false,
                },
              },
            ],
          },
        ],
      },
      {
        path: "/music",
        name: "Music",
        component: () => import("@/views/AboutView.vue"),
        meta: { title: "音乐", icon: "el-icon-s-opportunity", hidden: false },
      },
      {
        path: "/image",
        name: "Image",
        component: () => import("@/views/AboutView.vue"),
        meta: { title: "图片", icon: "el-icon-picture", hidden: false },
      },
    ],
  },
];
