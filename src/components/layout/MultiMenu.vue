<template>
  <template v-for="(item, index) in menuList" :key="index">
    <el-sub-menu
      v-if="!item?.meta?.hidden && item?.children && item?.children.length > 0"
      :index="item?.path"
    >
      <template #title>
        <el-icon>
          <component :is="item?.meta?.icon"></component>
        </el-icon>
        <span>{{ item?.meta?.title }}</span>
      </template>
      <multi-menu :menuList="item?.children"></multi-menu>
    </el-sub-menu>
    <el-menu-item v-else-if="!item?.meta?.hidden" :index="item?.path">
      <el-icon>
        <component :is="item?.meta?.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ item?.meta?.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
defineProps(["menuList"]);
</script>

<style scoped></style>
