<template>
  <div>
    <Header />
    <SideBarMenu />
    <div id="layout">
      <nuxt :key="route.fullPath" />
    </div>
    <PhoneAnimation />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent, useRoute } from "@nuxtjs/composition-api";
import Header from "~/components/Header.vue";
import SideBarMenu from "../components/SideBarMenu.vue";
import PhoneAnimation from "~/components/PhoneAnimation.vue";
// import Footer from "~/components/Footer.vue";

export default defineComponent({
  name: "DefaultLayout",

  components: {
    Header,
    SideBarMenu,
    PhoneAnimation,
    // Footer,
    Footer: () => import(/* webpackPrefetch: true */ "~/components/Footer.vue"),
  },

  setup() {
    const route = useRoute();
    // console.log("route", route);
    return { route };
  },
});
</script>

<style lang="scss">
@media screen and (min-width: 850px) {
  .mobile,
  .newsMobile {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .header,
  .header_megamenu,
  .news__item {
    display: none;
  }
}

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
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      margin: 0 auto;
      .information,
      .project__items,
      .open-project__item,
      .video__item,
      .news,
      .customer__content,
      .mailbox__content,
      .partner {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  @include responsive_tablet {
    .information,
    .project__items,
    .open-project__item,
    .video__item,
    .news,
    .customer__content,
    .mailbox__content,
    .partner {
      width: 850px;
    }
  }

  @include responsive_large {
    .information,
    .project__items,
    .open-project__item,
    .video__item,
    .news,
    .customer__content,
    .mailbox__content,
    .partner {
      width: 984px;
    }
  }
}
</style>
