<script setup>
import { Search } from 'lucide-vue-next';
import { onMounted } from 'vue';

onMounted(() => {
    fetch('http://localhost:8000/api/products/search')
        .then(response => response.json())
        .then(data => {
            products.value = data;
        })
        .catch(error => console.error('Error:', error));
});
</script>
<template>
  <div class="relative content-center mt-20 md:mx-10 select-none">
    <p class="text-5xl mb-6 font-semibold">Search Result</p>   
          <input class="w-[750px] rounded-full border-2 border-black p-2" type="text" placeholder="Search" />
          <div class="absolute inline-flex top-[80px] transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 right-[550px] items-center pl-3">
            <button>  
              <Search />
            </button>
        </div>  

        <router-link v-for="product in products" :key="product.id" 
                :to="`/product/${product.id}`"
    class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
    transition ease-in-out delay-10 hover:-translate-y-1  hover:scale-110 hover:underline" >

    <!-- Image container with relative positioning -->
    <div class="relative">
        <img :class="['rounded-t-lg p-5  w-[250px] h-[250px] flex', { 'grayscale': product.quantity === 0 }]" 
             :src="product.product_image" 
             alt="" />
        <!-- Conditionally render the Sold Out tag if quantity is 0 -->
        <p v-if="product.quantity === 0" class="bg-[#f5f5f5] w-20 shadow-md text-center text-sm absolute top-6 left-4 ">
            Sold Out
        </p>
    </div>

    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-lg font-bold">{{ product.category }} {{ product.name }}</h5>
            <p class="mb-2 text-md">Php {{ product.price }}</p>
        </a>
    </div>
</router-link>

    </div>
</template>