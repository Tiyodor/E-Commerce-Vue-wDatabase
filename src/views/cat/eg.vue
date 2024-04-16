<script setup>
import Rx from "/eg/egrx.jpg";
import Nu from "/eg/nu.jpg";
import Str from "/eg/str.jpg";
import Strg from "/eg/strg.jpeg";
import { ArrowUpDown } from 'lucide-vue-next';
import { List } from 'lucide-vue-next';
import Eg from "/scales/eg.png";




</script>

<template>
  <!--Categories-->
  <section>
    <div class="top-80 z-0 absolute px-20  select-none">
      <div class="inline-flex pb-5">
        <List /> <a>
          Categories
        </a>
      </div>
      <div class="border-t-2 border-solid border-gray-200 pt-5">
        <ul class="space-y-5 max-w-md list-inside">
          <li>
            <router-link to="/shop" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >
              All
            </router-link>
          </li>
          <li>
            <router-link to="/entry-grade" class="underline text-black hover:text-lg">
              Entry Grade
            </router-link>
          </li>
          <li>
            <router-link to="/high-grade" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >

              High Grade
            </router-link>
          </li>
          <li>
            <router-link to="/real-grade" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >

              Real Grade
            </router-link>
          </li>
          <li>
            <router-link to="/master-grade" class="text-gray-400 hover:underline hover:text-black hover:text-lg" >

              Master Grade
            </router-link>
          </li>

          <li>
            <router-link to="/super-deformed" class="text-gray-400 hover:underline hover:text-black text-lg" >

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
      <img :src="Eg" class=" float-end w-80"/>

      <p class="flex font-semibold ml-[40px] text-[50px]">Shop - Entry Grade</p>


      <div class="inline-flex ml-[40px] mb-2">
        <p>Sort</p> <!--can sort by availability and price-->
        <button>
          <ArrowUpDown />
        </button>
      </div>

      <div class="pt-10 grid grid-cols-5 gap-50 mx-10 w-full bg-[#f6f6f6] p-10 animated animatedFadeInUp fadeInUp">


        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Rx" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Eg Rx-78-2 Gundam</h5>
              <p class="mb-2 text-md">₱ 700.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Nu" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Eg Nu Gundam</h5>
              <p class="mb-2 text-md">₱ 799.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Str" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Eg Strike</h5>
              <p class="mb-2 text-md">₱ 600.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Strg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Eg Strike Galaxy</h5>
              <p class="mb-2 text-md">₱ 799.00 </p>
            </a>
          </div>
        </div>


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
</style>