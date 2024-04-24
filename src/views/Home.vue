<script setup>
import Hg from "/scales/hg.png";
import Rg from "/scales/rg.png";
import Mg from "/scales/mg.png";
import Pg from "/scales/pg.png";
import Sd from "/scales/sd.png";
import Eg from "/scales/eg.png";
import Hirm from "/scales/hirm.png";
import One from "/scales/1100.png";
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const products = ref([]);
const router = useRouter();

onMounted(() => {
    fetch('http://localhost:8000/api/products/random')
        .then(response => response.json())
        .then(data => {
            products.value = data;
        })
        .catch(error => console.error('Error:', error));
});
</script>

<!--Fix On view show animation for home-->


<template>
  
  <div class="relative content-center md:mx-10 select-none">
    
    <!-- Carousel section-->
    <section>
      <div id="default-carousel-container" class="carousel-container " data-carousel="slide">
    <!-- Carousel wrapper -->
    <div id="car">
      <transition name="fade" mode="out-in">
        <img :src="activeSlide.imageUrl" id="slider" alt="Slide">
      </transition>
    </div>
    <div class="carousel-controls">
      <button class="carousel-controls__button" @click="previous">&#60;</button>
      <button class="carousel-controls__button" @click="next">&#62;</button>
    </div>
  </div>
    </section>

    <!-- Category section -->
    <section>
      <div class="pt-10 md:px-10 md:mx-[180px] bg-white ">
        <p class="font-semibold md:text-[50px] text-center">Scale Category</p>
        <div class="pt-10 grid grid-cols-4 gap-4 md:mx-60">


          <div class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/high-grade">
              <img class="rounded-t-lg p-5" :src="Hg" alt="" />
            <div class="p-5">
                <h5 class="mb-2 md:text-2xl font-bold">High Grade</h5>
            </div>
          </router-link>
          </div>

          
          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/real-grade">

              <img class="rounded-t-lg p-5" :src="Rg" alt="" />
          
            <div class="p-5">
            
                <h5 class="mb-2 md:text-2xl font-bold">Real Grade</h5>

            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/master-grade">

              <img class="rounded-t-lg p-5" :src="Mg" alt="" />
           
            <div class="p-5">
             
                <h5 class="mb-2 md:text-2xl font-bold">Master Grade</h5>
         
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/super-deformed">

              <img class="rounded-t-lg p-5 md:max-w-[199px]" :src="Sd" alt="" />
           
            <div class="p-5">
             
                <h5 class="mb-2 md:text-2xl font-bold">Super Deformed</h5>
              
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/perfect-grade">

              <img class="rounded-t-lg p-5 max-w-md container" :src="Pg" alt="" />
           
            <div class="p-5">
              
                <h5 class="mb-2 md:text-2xl font-bold">Perfect Grade</h5>
              
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/others">

              <img class="rounded-t-lg p-5 max-w-[199px] container" :src="One" alt="" />
           
            <div class="p-5">
             
                <h5 class="mb-2 md:text-2xl font-bold">1/100 scale</h5>
            
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/hires">

              <img class="rounded-t-lg p-5 max-w-md container" :src="Hirm" alt="" />
            
            <div class="p-5">
              
                <h5 class="mb-2 md:text-2xl font-bold">High Res</h5>
             
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/entry-grade">

              <img class="rounded-t-lg p-5 max-w-md container" :src="Eg" alt="" />
            
            <div class="p-5">
                <h5 class="mb-2 md:text-2xl font-bold">Entry Grade</h5>
             
            </div>
            </router-link>
          </div>
          
        </div>
      </div>
    </section>

    <!--products-->
    <section>
  <div class="pt-10 md:px-10 md:mx-[180px] text-center bg-white">
    <p class="font-semibold md:text-[50px]">Random Products</p>
    <router-link to="/shop"><a class="hover:underline text-gray-400 hover:text-black text-2xl">For more click here</a></router-link>

    <div class="pt-10 grid md:grid-cols-5 md:gap-5 md:mx-10 justify-center">
      
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
        <p v-if="product.quantity === 0" class="bg-[#f5f5f5] w-20 shadow-md text-sm absolute top-6 left-4 ">
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


<script>
export default {
  data() {
    return {
      slides: [
        {
          imageUrl: '/slide1.jpg',
          id: 1
        },
        {
          imageUrl: '/slide2.jpg',
          id: 2
        },
        {
          imageUrl: '/slide3.jpg',
          id: 3
        },
        {
          imageUrl: '/slide4.jpg',
          id: 4
        },
        {
          imageUrl: '/slide5.jpg',
          id: 5
        },
      ],
      activeIndex: 0,
      autoSlideInterval: null
    };
  },
  computed: {
    activeSlide() {
      return this.slides[this.activeIndex];
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    next() {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    },
    previous() {
      this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.next();
      }, 3000); // Change interval duration as needed
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    }
  },
  beforeDestroy() {
    this.stopAutoSlide();
  }
};
</script>

<style scoped>

.grayscale {
  filter: grayscale(100%);
}


.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

#car {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;
}

#slider {
  display:flex;
  max-width: 100%;
  /* width: 1950px;
  max-height: 100%; */
  height: 750px;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.carousel-controls__button {
  cursor: pointer;
  background: rgb(32, 32, 32);
  border: 0;
  color: #fff;
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 18px;
}

</style>