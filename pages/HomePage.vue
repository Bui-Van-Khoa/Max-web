<template>
  <div class="root">
    <!-- <Header /> -->
    <Carousel />
    <div class="body">
      <ContentHome />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Header from "~/components/Header.vue";
import ContentHome from "~/components/HomePage/ContentHome.vue";
import Carousel from "~/components/Carousel.vue";

export default defineComponent({
  name: "HomePage",
  components: { Header, ContentHome, Carousel },
});
</script>

