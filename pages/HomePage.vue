<template>
  <div class="root">
    <Carousel />
    <div class="body">
      <ContentHome />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import ContentHome from "~/components/HomePage/ContentHome.vue";
import Carousel from "~/components/Carousel.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    ContentHome,
    Carousel,
    Footer: () => import("~/components/Footer.vue"),
  },
});
</script>
