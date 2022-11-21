<template>
  <el-container class="layout-container">
    <el-aside width="auto" style="height: 100%">
      <menu-list :menuList="routerList"></menu-list>
    </el-aside>

    <el-container>
      <el-header
        style="text-align: right; font-size: 12px; background-color: red"
      >
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Setting } from "@element-plus/icons-vue";
import { ref } from "vue";
import MenuList from "@/components/layout/MenuList.vue";
import { routerList as list } from "@/router/basic";

const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};
const routerList = list;
const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<style scoped>
.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container .el-menu {
  border-right: none;
}

.layout-container .el-main {
  padding: 0;
}

.layout-container .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
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
