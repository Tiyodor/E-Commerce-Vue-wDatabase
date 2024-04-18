<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const product = ref({});
const recommendedProducts = ref([]);
const route = useRoute();
const counter = ref(1);

// Fetch product data whenever route changes
watch(() => route.params.id, async (newId) => {
  await fetchProductData(newId);
});

onMounted(async () => {
  // Fetch product data when component is mounted
  await fetchProductData(route.params.id);
  await fetchRecommendedProducts();
});

async function fetchProductData(id) {
  const response = await fetch(`http://localhost:8000/api/products/${id}`);
  const data = await response.json();
  product.value = data;
}

async function fetchRecommendedProducts() {
  const response = await fetch(`http://localhost:8000/api/recommended`);
  const data = await response.json();
  recommendedProducts.value = data;
}

const increase = () => {
  counter.value++;
};

const decrease = () => {
  if (counter.value > 1) counter.value--;
};
</script>



<!--Fix the reload-->

<template>
  <div class="relative content-center mx-10">
    <!-- Product Info -->
    <section>
      <div class="pt-10 px-10 mx-[180px] select-none">
        <div class="pt-10 grid grid-cols-2 gap-20 mx-60">
          <!-- Image -->
          <div id="prodImg">
            <img class="rounded-2xl w-full" :src="product.product_image" alt="Product Image" />
          </div>

          <!-- Product Information -->
          <div id="prodInfo">
            <p class="font-semibold text-5xl pb-4">
              {{ product.category }} {{ product.name }}
            </p>
            <h5 class="text-2xl pb-3">
              ₱ {{ product.price }}<br>
              <span class="text-base text-gray-400 pb-4">Tax Included.</span>
            </h5>
            <h4 class="text-xl pb-4 opacity-65">
              <span v-if="product.quantity === 0">Sold out</span>
              <span v-else-if="product.quantity < 5">Low stock: {{ product.quantity }} left</span>
              <span v-else>In stock {{ product.quantity }}</span>
              <span class="inline-flex absolute h-4 w-4">
                <span v-if="product.quantity === 0 || product.quantity < 5"
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span v-else-if="product.quantity > 5"
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span v-else
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                <span class="relative rounded-full inline-flex h-4 w-4"
                  :class="{ 'bg-red-400': product.quantity === 0, 'bg-green-400': product.quantity > 5, 'bg-orange-500': product.quantity > 0 && product.quantity < 5 }"></span>
              </span>
            </h4>

            <div class="pb-3">
              <h5 class="text-base pb-1">Quantity</h5>
              <div
                class="relative z-0 flex h-[50px] w-[150px] items-center justify-around rounded-3xl border border-black border-solid bg-white">
                <button class="relative items-center text-6xl pb-4" @click="decrease">-</button>
                <span>{{ counter }}</span>
                <button class="relative text-5xl pb-3" @click="increase">+</button>
              </div>
            </div>
            
            <div class="pb-3">
              <button
                class="relative items-center text-2xl border border-yellow-600 border-solid rounded-3xl h-[50px] w-full bg-white hover:border-2 hover:border-yellow-700 hover:bg-yellow-400">
                Add to cart
              </button>
            </div>

            <div class="pb-3">
              <router-link :to="`/checkout/${product.id}`"
               >
               <div  class="relative items-center text-2xl border border-blue-600 border-solid rounded-3xl
                 h-[50px] w-full  bg-white hover:border-2  hover:border-blue-700 hover:bg-blue-400 text-center" >
               <p class="mt-1"> Buy it now </p>
              </div>
              </router-link>
            </div>
            
            <!-- <h4 class="pb-1 text-2xl font-bold">{{ product.availability }}</h4> -->
            <h4 class="pb-1">{{ product.details }}</h4>
            <h4 class="pb-7 font-bold text-lg opacity-65">***Shipping fees are not included in all pre-order items.***
            </h4>
            <div class="pb-7">
              <h4>Please read the following link for more info.</h4>
              <ul class="max-w-md list-inside space-y-2 opacity-70">
                <li><a class="hover:underline" href="#">Terms and Conditions</a></li>
                <li><a class="hover:underline" href="#">Refund Policy</a></li>
                <li><a class="hover:underline" href="#">Payment Method</a></li>
                <li><a class="hover:underline" href="#">Shipping Policy</a></li>
              </ul>
            </div>
            <h3 class="font-bold text-lg pb-1">Should you have any question or item/s inquiry, please send us a message.
            </h3>
            <ul>
              <li>
                <a class="text-gray-400 pb-1" href="https://www.facebook.com/pinoymandelaepekz/">Facebook: <span
                    class="font-bold text-black hover:underline">facebook.com/gundfactory</span></a>
              </li>
              <li>
                <a class="text-gray-400 pb-1" href="#">Email: <span class="font-bold text-black hover:underline">
                    gundfactory@gmail.com </span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Recommended Section -->
    <section>
      <div class="pt-10 px-10 mx-[360px]  bg-white select-none">
        <p class="font-semibold mx-[50px]  text-2xl">You may also like</p>

        <div class="pt-10 grid grid-cols-5 gap-64 justify-center mx-10">

          <router-link v-for="product in recommendedProducts" :key="product.id" :to="`/product/${product.id}`" class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:underline">
            <div class="relative">
              <img :class="['rounded-t-lg p-5  w-[250px] h-[250px] flex', { 'grayscale': product.quantity === 0 }]"
                :src="product.product_image" alt="" />
              <p v-if="product.quantity === 0"
                class="bg-[#f5f5f5] w-20 shadow-md text-center text-sm absolute top-6 left-4">
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
      </div>
    </section>
  </div>
</template>
