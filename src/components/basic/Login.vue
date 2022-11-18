<template></template>

<script lang="ts" setup>
import { login } from "@/api/api";
import { onMounted } from "vue";
import router from "@/router";

const getLogin = async () => {
  const data = {
    username: "test",
    password: "test",
  };
  const { data: res } = await login(data);
  res.roles.forEach((item: { component: any }) => {
    item.component = transformFn(item.component);
  });
  router.addRoute(res.roles);
  await router.push("/home");
  /**
   const { data: res } = await axios.post("/api/login", {
      roler: "xiaozhang",
    });
   // 给需要权限的接口 添加 token属性到  Authrization 这个字段； 需要到请求拦截器里面添加
   // 登录成功以后，还需要根据返回值，动态添加路由；因为不同的人登录系统，不同的权限，返回的内容也不一样
   this.setToken(res.token);
   // 现在我们要将字符串Home，转换为 函数 () => import('../views/Home.vue'),
   res.roles.forEach((item) => {
      item.component = this.transformFn(item.component);
    });
   this.$router.addRoutes(res.roles); //※※※
   this.$router.push("/home");
   **/
};
const transformFn = (name: string) => {
  return () => import("@/views/" + name + ".vue");
};
onMounted(() => {
  getLogin();
});
</script>

<style scoped></style>
