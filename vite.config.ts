import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        /**
                 IconsResolver({
          prefix: "icon",
        }),
                 **/
      ],
    }),
    Components({
      // 自动导入 Element Plus 组件
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        /**
                 IconsResolver({
          enabledCollections: ["ep"],
        }),
                 **/
      ],
    }),
    /**
         Icons({
      autoInstall: true,
    }),
         **/
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
  },
});
