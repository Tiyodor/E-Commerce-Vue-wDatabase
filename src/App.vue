<script setup>
import Home from "./components/Home.vue";
import { Search } from 'lucide-vue-next';
import { ShoppingBag } from 'lucide-vue-next';
import Logo from '../public/GundFactory.png';
</script>

<template>
  <div class="flex justify-center align-center pt-20 pb-10 mx-10 shadow-lg ">
    <img class="max-w-[250px]" :src="Logo" />
    <ul>
      <il class="m-10 hover:underline active:underline"><a >Home</a></il>
      <il class="m-10 hover:underline">Shop</il>
      <il class="m-10 hover:underline">About</il>
    </ul>
     <Search class="ml-20 mr-10" />
     <ShoppingBag />
  </div>
  <Home />
</template>

<style scoped>
</style>
