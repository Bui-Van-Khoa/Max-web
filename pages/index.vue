<template>
  <div class="root">
    <Header />
    <Carousel />
    <div class="body">
      <Content />
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
import Content from "~/components/BodyContent/HomePage/Content.vue";
import Carousel from "~/components/Carousel.vue";

export default defineComponent({
  name: "IndexPage",
  components: { Header, Content, Carousel },
});
</script>

<style lang="scss">
$tablet: "only screen and (min-width: 850px) and (max-width: 1023px)";
$large: "only screen and (min-width: 1024px) and (max-width: 1239px)";
$mobile: "only screen and (min-width: 849px)";
@mixin responsive_tablet() {
  @media #{$tablet} {
    @content;
  }
}
@mixin responsive_large() {
  @media #{$large} {
    @content;
  }
}

@mixin responsive_mobile() {
  @media #{$mobile} {
    @content;
  }
}

#__layout {
  .root {
    position: relative;
    .body {
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      margin: 0 auto;
      margin-top: 65px;
      .information,
      .project__items,
      .open-project__item {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  @include responsive_tablet {
    .information,
    .project__items,
    .open-project__item {
      width: 850px;
    }
  }

  @include responsive_large {
    .information,
    .project__items,
    .open-project__item {
      width: 984px;
    }
  }
}
</style>
