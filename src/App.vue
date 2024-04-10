<script setup>
import { Search } from 'lucide-vue-next';
import { ShoppingBag } from 'lucide-vue-next';
import Logo from '/GundFactory.png';
import { RouterView } from "vue-router";

</script>
<template>
  <!-- NavBar -->
  <div class="max-w-[1950px] pb-2 mx-10 mt-1 shadow-lg top-0 z-50 bg-white"> 
    <p class="text-center text-md font-semibold"><a href="https://www.facebook.com/tiyodoryabutV2">www.facebook.com/tiyodoryabutV2</a></p>
    <p class="text-center text-md font-semibold">THIS IS A FAKE WEBSITE</p>
  </div>
  <div class="sticky pt-2 max-w-[1950px] pb-10 mx-10 shadow-lg top-0 z-50 bg-white">
    <div class="flex  justify-center align-center mr-[150px] text-xl" >
    <img class="flex max-w-[250px] mr-[150px] cursor-pointer" :src="Logo" />
    <ul class="mr-20 ">
      <il class="m-10 inline-block"><a href="/"><button class="cursor-pointer hover:underline">Home</button></a></il>
      <il class="m-10 inline-block"><a ><button class="cursor-pointer hover:underline  ">Shop</button></a></il>
      <il class="m-10 inline-block"><a ><button class="cursor-pointer hover:underline  ">About</button></a></il>
      <il class="m-10 inline-block"><a ><button class="cursor-pointer hover:underline  ">News</button></a></il>

    </ul>
    <button className="ml-20 mr-10 cursor-pointer inline-block transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
  <Search />
</button>
<button className="cursor-pointer inline-block transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
  <ShoppingBag />
</button>
  </div>
</div>
  

  <RouterView/>

  <!--Footer-->
  <div class="bg-white relative border-t-[1px] items-center border-black pt-12 mt-20 max-w-[1950px] pb-10 mx-10 b-20"> 
    <div class="flex justify-evenly">
    <div class="relative justify-center  text-lg" >
      <p class=" font-bold">Links</p>
      <ul class="max-w-md space-y-2 list-inside">
        <li>
          <a class="hover:underline text-gray-400" href="">Terms and Conditions</a>
        </li>
        <li>
          <a class="hover:underline text-gray-400" href="">Refund Policy</a>
        </li>
        <li>
          <a class="hover:underline text-gray-400" href="">Payment Method</a>
        </li>
        <li>
          <a class="hover:underline text-gray-400" href="">Shipping Policy</a>
        </li>
      </ul>
    </div>

    <div class="relative justify-center  text-lg" >
      <p class=" font-bold">Contact us</p>
      <ul class="max-w-md space-y-2 list-inside">
        <li>
          <a class="text-gray-400" href="https://www.facebook.com/pinoymandelaepekz/">Facebook: <span class="font-bold text-black hover:underline">facebook.com/gundfactory</span></a>
        </li>
        <li>
          <a class="text-gray-400" href="">Email: <span class="font-bold text-black hover:underline"> gundfactory@gmail.com </span></a>
        </li>
        <li>
          <a class="text-gray-400" href="">Mobile: <span class="font-bold text-black hover:underline"> 094321433</span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="bg-white border-t-[1px] items-center border-gray-300 pt-12 mt-10 max-w-[1950px]  mx-10 "> 
  <span class="text-gray-400 flex justify-center ">© 2024, GundFactory Powered by mama mo</span>
      </div>
</template>

<style scoped>
</style>
