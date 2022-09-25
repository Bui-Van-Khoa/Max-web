<template>
  <el-row :gutter="10" class="hidden-sm-only">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">asd</div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">asd</div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">asd</div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">asd</div></el-col>
</el-row>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
#__layout {
  .el-header {
    display: flex;
    justify-content: space-between;
    background-color: green;
  }
}
</style>
