<script setup>
import slider1 from "/slide1.jpg";
import slider2 from "/slide2.jpg";
import slider3 from "/slide3.jpg";
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

</script>




<template>
  <div class="relative content-center mx-10">
    <!-- Carousel section-->
    <section>
      <div id="default-carousel container" class="" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden md:h-[700px] ">
          <!-- Item 1 -->
          <div class="hidden duration-70 ease-in-out" data-carousel-item>
            <img :src="slider1" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..." />
          </div>
          <!-- Item 2 -->
          <div class="dhidden uration-70 ease-in-out" data-carousel-item>
            <img :src="slider2" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..." />
          </div>
          <div class="hiddenduration-70 ease-in-out" data-carousel-item>
            <img :src="slider3"
              class="absolute object-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
            data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
            data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
            data-carousel-slide-to="2"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
            data-carousel-slide-to="3"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
            data-carousel-slide-to="4"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
          class="relative top-0 start-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>

    <!-- Category section -->
    <section>
      <div class="pt-10 px-10 mx-[180px] bg-white ">
        <p class="font-semibold text-[50px]">Scale Category</p>
        <div class="pt-10 grid grid-cols-4 gap-4 mx-60">
          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg p-5" :src="Hg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold">High Grade</h5>
              </a>
            </div>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg p-5" :src="Rg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold">Real Grade</h5>
              </a>
            </div>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg p-5" :src="Mg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold">Master Grade</h5>
              </a>
            </div>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg p-5 max-w-[199px]" :src="Sd" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold">Super Deformed</h5>
              </a>
            </div>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg p-5 max-w-md container" :src="Pg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold">Perfect Grade</h5>
              </a>
            </div>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg p-5 max-w-[199px] container" :src="One" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold">1/100 scale</h5>
              </a>
            </div>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg p-5 max-w-md container" :src="Hirm" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold">High Resolution</h5>
              </a>
            </div>
          </div>

          <div
            class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg p-5 max-w-md container" :src="Eg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold">Entry Grade</h5>
              </a>
            </div>
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
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
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
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Air" alt="" />
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

  </div>
</template>

<style scoped>
/* .animated {
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
} */
</style>
