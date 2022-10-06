<template lang="">
  <div id="carousel">
    <el-carousel :autoplay="true">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="~/assets/images/homepage19.jpg" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">
#carousel {
  margin-top: 22px;
  .el-carousel {
    &__container {
      height: 500px;
      .el-carousel__item {
        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
  }
}
</style>
