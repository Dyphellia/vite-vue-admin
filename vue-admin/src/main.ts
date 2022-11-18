import { createApp } from "vue";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import Mock from "@/mock/mock";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 全局注册icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
