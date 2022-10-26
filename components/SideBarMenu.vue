<template>
  <div class="sidebar" id="sidebar">
    <el-drawer
      :visible.sync="drawer"
      :with-header="false"
      direction="ltr"
      :show-close="true"
    >
      <div class="flex justify-end p-4" @click="drawer = false">
        <i class="el-icon-close"></i>
      </div>
      <!-- <div class="w-full">
        <el-menu class="border-none">
          <el-menu-item v-for="(item, index) in Max_web_menu" :key="index">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </div> -->
    </el-drawer>
  </div>
</template>

<script>
import { defineComponent,ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const drawer = ref(false);
    return { drawer };
  },
});
</script>
