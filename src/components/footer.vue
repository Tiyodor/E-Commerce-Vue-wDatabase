<script setup>
const VueImage = "/vue.png";
const LaraImage = "/lara.png";
const TailImage = "/tail.png";
</script>

<template>
  <div class="footer">
    <div class="b-20 relative md:mx-10 max-w-[1950px] select-none items-center border-t-[1px] border-gray-200 bg-[#f7f7f7] pb-5 pt-12">
      <div class="flex justify-evenly">
        <div class="relative justify-center text-lg">
          <p class="font-bold">Links</p>
          <ul class="max-w-md list-inside space-y-2">
            <li>
              <router-link to="/terms&conditions" class="text-gray-400 hover:underline  hover:text-black">Terms and Conditions</router-link>
            </li>
            <li>
              <router-link to="/payment-method" class="text-gray-400 hover:underline  hover:text-black">Payment Method</router-link>
            </li>
            <li>
              <router-link to="/shipping-policy" class="text-gray-400 hover:underline  hover:text-black">Shipping Policy</router-link>
            </li>
          </ul>
        </div>

        <div class="relative justify-center text-lg">
          <p class="font-bold">Contact us</p>
          <ul class="max-w-md list-inside space-y-2">
            <li>
              <a class="text-gray-400" href="https://www.facebook.com/pinoymandelaepekz/">Facebook: <span class="font-semibold text-black hover:underline">facebook.com/gundfactory</span></a>
            </li>
            <li>
              <a class="text-gray-400" href="">Email: <span class="font-semibold text-black hover:underline">gundfactory@gmail.com</span></a>
            </li>
            <li>
              <a class="text-gray-400" href="">Mobile: <span class="font-semibold text-black hover:underline">094321433</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mx-10 mb-5 max-w-[1950px] select-none items-center border-t-[1px] border-gray-200 bg-white pt-8 relative">
      <span class="flex justify-center text-gray-400">© 2024, GundFactory Powered by
       <a href="https://vuejs.org/" target="blank"> <img class="w-7 h-7 mx-4" :src="VueImage"> </a> 
       <a href="https://laravel.com/" target="blank"> <img class="w-7 h-7 mr-4" :src="LaraImage">  </a> 
       <a href="https://tailwindcss.com/" target="blank"> <img class="w-8 h-7" :src="TailImage"> </a> </span>
      
    </div>
  </div>
</template>

<style scoped>
.footer {
  margin-top: auto;
  font-family: "Rajdhani", sans-serif;
  font-weight: 500;
  font-style: normal;
}
</style>
