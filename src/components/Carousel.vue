<template>
  <carousel :per-page="1" :autoplay="true" :autoplay-timeout="1000" :wrap-around="true">
    <slide v-for="item in items" :key="item.id">
      <img :src="item.image" alt="Carousel Slide" class="w-full" />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      items: [
        { id: 1, image: '/slide1' },
        { id: 2, image: '/slide2' },
        { id: 3, image: '/slide3' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles for the carousel */
</style>
