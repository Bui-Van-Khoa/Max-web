<template>
  <client-only>
    <Flickity :options="flickityOptions">
      <slot />
    </Flickity>
  </client-only>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "FlickityCarousel",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    console.log("props", props);
    const flickityOptions = {
      prevNextButtons: false,
      pageDots: true,
      wrapAround: true,
      cellAlign: "left",
      draggable: true,
    };
    return { flickityOptions };
  },
});
</script>
