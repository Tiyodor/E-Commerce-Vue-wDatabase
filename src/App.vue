<script setup>
import Home from "./components/Home.vue";
import { Search } from 'lucide-vue-next';
import { ShoppingBag } from 'lucide-vue-next';
import Logo from '/GundFactory.png';
</script>

<template>
  <div class="sticky pt-12 max-w-[1950px] pb-10 mx-10 shadow-lg top-0 z-50 bg-white">
    <div class="flex  justify-center align-center mr-[150px]" >
    <img class="flex max-w-[250px] mr-[150px] cursor-pointer" :src="Logo" />
    <ul class="mr-20 ">
      <il class="m-10 inline-block"><a href="/"><button class="cursor-pointer hover:underline">Home</button></a></il>
      <il class="m-10 inline-block"><a ><button class="cursor-pointer hover:underline  ">Shop</button></a></il>
      <il class="m-10 inline-block"><a ><button class="cursor-pointer hover:underline  ">About</button></a></il>
      <il class="m-10 inline-block"><a ><button class="cursor-pointer hover:underline  ">News</button></a></il>

    </ul>
    <button className="ml-20 mr-10 cursor-pointer inline-block">
  <Search />
</button>
<button className="cursor-pointer inline-block">
  <ShoppingBag />
</button>
  </div>
</div>
  <Home />
</template>

<style scoped>
</style>
