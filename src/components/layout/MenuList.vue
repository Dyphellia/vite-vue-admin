<template>
  <el-scrollbar>
    <el-menu :collapse="isCollapse" class="el-menu-vertical">
      <multi-menu :menuList="menuList" ref="menuRef"></multi-menu>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import MultiMenu from "@/components/layout/MultiMenu.vue";
import { getCurrentInstance, onMounted, ref } from "vue";

defineProps(["menuList"]);
const isCollapse = ref(false);
const currentInstance = getCurrentInstance();

</script>
<style scoped>
.menu-icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
