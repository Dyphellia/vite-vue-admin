<template>
  <el-scrollbar>
    <el-menu :collapse="isCollapse" class="el-menu-vertical">
      <el-header style="font-size: 12px">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 60px;
          "
        >
          <div>
            <span>
              <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
              <span v-if="!isCollapse">通讯录管理</span>
            </span>
          </div>
          <div>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
              <el-icon
                v-show="!isCollapse"
                class="iconBtn expandBtn"
                @click="iconClick"
              >
                <Expand />
              </el-icon>
              <el-icon
                v-show="isCollapse"
                class="iconBtn shrinkBtn"
                @click="iconClick"
              >
                <Fold />
              </el-icon>
            </el-radio-group>
          </div>
        </div>
      </el-header>

      <multi-menu :menuList="menuList" ref="menuRef"></multi-menu>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import MultiMenu from "@/components/layout/MultiMenu.vue";
import { ref } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";

defineProps(["menuList"]);
const isCollapse = ref(false);
const iconClick = () => {
  isCollapse.value = !isCollapse.value;
};
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

.logo {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: 0 auto;
}

.iconBtn {
  font-size: 18px;
}
</style>
