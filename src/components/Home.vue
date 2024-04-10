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
</script>

<template>
  <div class="relative content-center mx-10">
    
      <section>
        <div id="default-carousel" class="" data-carousel="slide">
          <!-- Carousel wrapper -->
          <div class="relative overflow-hidden md:h-[780px]">
            <!-- Item 1 -->
            <div class="duration-700 ease-in-out" data-carousel-item>
              <img
                :src="slider1"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 2 -->
            <div class="duration-700 ease-in-out" data-carousel-item>
              <img
                :src="slider2"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="duration-700 ease-in-out" data-carousel-item>
              <img
                :src="slider3"
                class="absolute object-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>

          <!-- Slider indicators -->
          <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
        
      </section>

      <section>
        <div class="pt-10 px-10 mx-[180px] bg-white">
          <p class="font-semibold text-[55px]">Scale Category</p>
          <div class="pt-10 grid grid-cols-4 gap-4 mx-60">
            <div
              class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
            >
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
              class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
            >
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
              class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
            >
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
              class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
            >
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
              class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
            >
              <a href="#">
                <img
                  class="rounded-t-lg p-5 max-w-md container"
                  :src="Pg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold">Perfect Grade</h5>
                </a>
              </div>
            </div>

            <div
              class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
            >
              <a href="#">
                <img
                  class="rounded-t-lg p-5 max-w-[199px] container"
                  :src="One"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold">1/100 scale</h5>
                </a>
              </div>
            </div>

            <div
              class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
            >
              <a href="#">
                <img
                  class="rounded-t-lg p-5 max-w-md container"
                  :src="Hirm"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold">High Resolution</h5>
                </a>
              </div>
            </div>

            <div
              class="mb-5 max-w-sm rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
            >
              <a href="#">
                <img
                  class="rounded-t-lg p-5 max-w-md container"
                  :src="Eg"
                  alt=""
                />
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

      <section>
        
      </section>
    </div>
</template>

<style scoped>
</style>
