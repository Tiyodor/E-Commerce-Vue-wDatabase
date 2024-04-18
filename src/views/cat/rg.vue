<script setup>
import { ArrowUpDown } from 'lucide-vue-next';
import { List } from 'lucide-vue-next';
import Rg from "/scales/rg.png";
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const products = ref([]);
const router = useRouter();

// Define the category
const category = 'RG';

onMounted(() => {
    // Fetch products based on the category
    fetch(`http://localhost:8000/api/products/category/${category}`)
        .then(response => response.json())
        .then(data => {
            products.value = data;
        })
        .catch(error => console.error('Error:', error));
});
</script>


<template>
    <!--Categories-->
    <section>
        <div class="top-80 z-0 absolute px-20  select-none">
            <div class="inline-flex pb-5">
                <List /> <router-link to="">
                    Categories
                </router-link>
            </div>
            <div class="border-t-2 border-solid border-gray-200 pt-5">
                <ul class="space-y-5 max-w-md list-inside">
          <li>
            <router-link to="/shop" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >
              All
            </router-link>
          </li>
          <li>
            <router-link to="/entry-grade" class="text-gray-400 hover:underline hover:text-black hover:text-lg">
              Entry Grade
            </router-link>
          </li>
          <li>
            <router-link to="/high-grade" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >

              High Grade
            </router-link>
          </li>
          <li>
            <router-link to="/real-grade" class="underline text-black hover:text-lg" >

              Real Grade
            </router-link>
          </li>
          <li>
            <router-link to="/master-grade" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >

              Master Grade
            </router-link>
          </li>

          <li>
            <router-link to="/super-deformed" class=" text-gray-400 hover:underline hover:text-black text-lg" >

              Super Deformed
            </router-link>
          </li>
          <li>
            <router-link to="/perfect-grade" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >

              Perfect Grade
            </router-link>
          </li>
          <li>
            <router-link to="/hires" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >

              Hi-Resolution
            </router-link>
          </li>
          <li>
            <router-link to="/others" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >

              1/100
            </router-link>
          </li>
        </ul>
            </div>
        </div>
    </section>

    <!--items-->
    <section>
        <div class="pt-10 px-10 mx-[180px] bg-white  select-none">
          <img :src="Rg" class="pulse float-end h-32"/>

            <p class="flex font-semibold ml-[40px] text-[50px]">Shop - Real Grade</p>

            <div class="inline-flex ml-[40px] mb-2">
                <p>Sort</p> <!--can sort by availability and price-->
                <button>
                    <ArrowUpDown />
                </button>
            </div>
            
            <div class="pt-10 grid grid-cols-5 gap-50 mx-10 w-full bg-[#f6f6f6] p-10 animated animatedFadeInUp fadeInUp">

                <router-link v-for="product in products" :key="product.id" 
                :to="`/product/${product.id}`"
    class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
    transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">

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
        </div>
    </section>

</template>

<style scoped>
@keyframes fadeInUp {
    from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@-webkit-keyframes fadeInUp {
    from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: both
}

.animatedFadeInUp {
    opacity: 0
}

.fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
}

.pulse {
    animation: pulse 1s infinite ease-in-out alternate;
  }
  @keyframes pulse {
    from { transform: scale(0.98); }
    to { transform: scale(1); }
  }
</style>