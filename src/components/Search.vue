<template>
    <transition name="slide">
      <div v-if="show" class="text-center sticky p-10 bg-white mx-10 top-0 z-50">
        <input type="text" placeholder="Search" class="w-[750px] border-2 border-black rounded-full p-2" />
        <button class="text-2xl" @click="toggleSearch">X</button>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
      };
    },
    methods: {
      toggleSearch() {
        this.show = !this.show;
      },
    },
  };
  </script>
  
  <style scoped>
  .slide-enter,
  .slide-leave-to {
    transform: translateY(-100%);
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease-in;
  }
  </style>
  