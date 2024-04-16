<script setup>
import Hg from "/scales/hg.png";
import Rg from "/scales/rg.png";
import Mg from "/scales/mg.png";
import Pg from "/scales/pg.png";
import Sd from "/scales/sd.png";
import Eg from "/scales/eg.png";
import Hirm from "/scales/hirm.png";
import One from "/scales/1100.png";
import Rx from "/rg/Rx782.jpg";
import Nu from "/rg/nu.jpg";
import God from "/rg/god.jpg";
import Wing from "/rg/wing.jpg";
import Epyon from "/rg/epyon.jpg";
import Cali from "/hg/calibarn.jpg";
import Air from "/hg/aerial.jpg";
import Lfr from "/hg/lfrith.jpg";
import Just from "/hg/justice.jpg";
import Free from "/hg/freedom.jpg";
import Ban from "/sd/ban.jpg";
import Uni from "/sd/uni.jpg";
import Phen from "/sd/phen.png";
import Rxsd from "/sd/sdrx.webp";
import Calisd from "/sd/cali.webp";
import Nar from "/mg/nar.jpg";
import Sin from "/mg/sin.webp";
import Rxmg from "/mg/rx.jpg";
import Wingmg from "/mg/wing.jpg";
import Zeta from "/mg/zeta.jpg";
</script>

<!--Fix On view show animation for home-->


<template>
  
  <div class="relative content-center mx-10 select-none">
    
    <!-- Carousel section-->
    <section>
      <div id="default-carousel-container" class="carousel-container" data-carousel="slide">
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
      <div class="pt-10 px-10 mx-[180px] bg-white ">
        <p class="font-semibold text-[50px]">Scale Category</p>
        <div class="pt-10 grid grid-cols-4 gap-4 mx-60">

          <div class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/high-grade">
              <img class="rounded-t-lg p-5" :src="Hg" alt="" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold">High Grade</h5>
            </div>
          </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/real-grade">

              <img class="rounded-t-lg p-5" :src="Rg" alt="" />
          
            <div class="p-5">
            
                <h5 class="mb-2 text-2xl font-bold">Real Grade</h5>

            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/master-grade">

              <img class="rounded-t-lg p-5" :src="Mg" alt="" />
           
            <div class="p-5">
             
                <h5 class="mb-2 text-2xl font-bold">Master Grade</h5>
         
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/super-deformed">

              <img class="rounded-t-lg p-5 max-w-[199px]" :src="Sd" alt="" />
           
            <div class="p-5">
             
                <h5 class="mb-2 text-2xl font-bold">Super Deformed</h5>
              
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/perfect-grade">

              <img class="rounded-t-lg p-5 max-w-md container" :src="Pg" alt="" />
           
            <div class="p-5">
              
                <h5 class="mb-2 text-2xl font-bold">Perfect Grade</h5>
              
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/others">

              <img class="rounded-t-lg p-5 max-w-[199px] container" :src="One" alt="" />
           
            <div class="p-5">
             
                <h5 class="mb-2 text-2xl font-bold">1/100 scale</h5>
            
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/hires">

              <img class="rounded-t-lg p-5 max-w-md container" :src="Hirm" alt="" />
            
            <div class="p-5">
              
                <h5 class="mb-2 text-2xl font-bold">High Resolution</h5>
             
            </div>
            </router-link>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <router-link to="/entry-grade">

              <img class="rounded-t-lg p-5 max-w-md container" :src="Eg" alt="" />
            
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold">Entry Grade</h5>
             
            </div>
            </router-link>
          </div>
          
        </div>
      </div>
    </section>

    <!-- RG section -->
    <section>
      <div class="pt-10 px-10 mx-[180px] bg-white">
        <p class="font-semibold text-[50px]">Real Grade</p>

        <div class="pt-10 grid grid-cols-5 gap-5 mx-10">

          <router-link to="/product"
            class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a>
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Rx" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Rg Rx-78-2 Ver 2.0</h5>
                <p class="mb-2 text-md">₱ 2000.00 </p>
              </a>
            </div>
          </router-link>


          <router-link to="/product" class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Nu" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Rg Rx93 Hi-Nu</h5>
                <p class="mb-2 text-md">₱ 3200.00 </p>
              </a>
            </div>
          </router-link>

          <router-link to="/product" class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline grayscale">

            <p class="bg-[#f5f5f5] w-20 shadow-md float-1 text-center text-sm absolute mt-6 ml-4">Sold Out</p>


            <a href="#">
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="God" alt="" />
            </a>
            <div class="p-5">
              
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Rg God Gundam</h5>
                <p class="mb-2 text-md">₱ 2600.00 </p>
              </a>
            </div>
          </router-link>

          <router-link to="/product" class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Wing" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Rg Wing Gundam</h5>
                <p class="mb-2 text-md">₱ 1900.00 </p>
              </a>
            </div>
          </router-link>

          <router-link to="/product" class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Epyon" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Rg Epyon gundam</h5>
                <p class="mb-2 text-md">₱ 2000.00 </p>
              </a>
            </div>
          </router-link>

        </div>
      </div>
    </section>

    <!-- Hg Section -->
    <section>
      <div class="pt-10 px-10 mx-[180px] bg-white">
        <p class="font-semibold text-[50px]">High Grade</p>

        <div class="pt-10 grid grid-cols-5 gap-5 mx-10">

          <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Cali" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Hg Calibarn Gundam</h5>
                <p class="mb-2 text-md">₱ 1400.00 </p>
              </a>
            </div>
          </div>

          <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline grayscale">

            <p class="bg-[#f5f5f5] w-20 shadow-md float-1 text-center text-sm absolute mt-6 ml-4">Sold Out</p>

            <a href="#">

              <img class="rounded-t-lg p-5 w-[250px] h-[250px] flex" :src="Air" alt="" />
              
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Hg Aerial</h5>
                <p class="mb-2 text-md">₱ 1400.00 </p>
              </a>
            </div>
          </div>

          <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Lfr" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Hg Lfrith</h5>
                <p class="mb-2 text-md">₱ 1800.00 </p>
              </a>
            </div>
          </div>

          <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Just" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Hg Immortal Justice</h5>
                <p class="mb-2 text-md">₱ 1500.00 </p>
              </a>
            </div>
          </div>

          <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Free" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Hg Rising Freedom</h5>
                <p class="mb-2 text-md">₱ 1600.00 </p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!--Mg Section-->
    <section>
      <div class="pt-10 px-10 mx-[180px] bg-white">
        <p class="font-semibold text-[50px]">Master Grade</p>
        <div class="pt-10 grid grid-cols-5 gap-5 mx-10">

          <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline grayscale">
            <p class="bg-[#f5f5f5] w-20 shadow-md float-1 text-center text-sm absolute mt-6 ml-4">Sold Out</p>

            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Nar" alt="" />
          
          <div class="p-5">
            
              <h5 class="mb-2 text-lg font-bold">Mg Narrative Gundam</h5>
              <p class="mb-2 text-md">₱ 3500.00 </p>
          
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Sin" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Mg Sinanju Stein</h5>
              <p class="mb-2 text-md">₱ 3700.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Rxmg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Mg Rx 78 2 Origin</h5>
              <p class="mb-2 text-md">₱ 3000.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Wingmg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Mg Wing Ver ka</h5>
              <p class="mb-2 text-md">₱ 3200.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Zeta" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Mg Zeta</h5>
              <p class="mb-2 text-md">₱ 3600.00 </p>
            </a>
          </div>
        </div>

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
  height: 800px;
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