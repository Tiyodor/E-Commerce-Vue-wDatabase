<script setup>
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
import { ArrowUpDown } from 'lucide-vue-next';
import { List } from 'lucide-vue-next';
import Gunpla from '/scales/gunpla.svg';


</script>

<template>
    <!--Categories-->
    <section>
        <div class="top-80 z-0 absolute px-20  select-none">
        <div class="inline-flex pb-5">
            <List />  <router-link to="">
             Categories 
             </router-link>
        </div>
        <div class="border-t-2 border-solid border-gray-200 pt-5"> 
          <ul class="space-y-5 max-w-md list-inside">
          <li>
            <router-link to="/shop" class=" underline text-black hover:text-lg" >
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
      <div class="pt-10 px-10 mx-[180px] bg-white  select-none ">
        <img :src="Gunpla" class=" float-end h-32"/>

                  <p class="flex font-semibold ml-[40px] text-[50px]">Shop</p>

            <div class="inline-flex ml-[40px] mb-2"> 
            <p>Sort</p> <!--can sort by availability and price-->
            <button> 
                <ArrowUpDown />
            </button>
             </div>
             <div class="pt-10 grid grid-cols-5 gap-50 mx-10 w-full bg-[#f6f6f6] p-10 animated animatedFadeInUp fadeInUp">
              
          <router-link to="/product"
            class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow transition 
            ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline ">
             <a class="text-gray-400 hover:underline hover:text-black hover:text-lg" href="">

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

          <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Calisd" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Sdcs Calibarn Gundam</h5>
              <p class="mb-2 text-md">₱ 1200.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Uni" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Sdcs Unicorn</h5>
              <p class="mb-2 text-md">₱ 1000.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Ban" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Sdcs Banshee</h5>
              <p class="mb-2 text-md">₱ 1000.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Phen" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Sdcs Phenex</h5>
              <p class="mb-2 text-md">₱ 1300.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Rxsd" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Sdcs Rx-78-2</h5>
              <p class="mb-2 text-md">₱ 1500.00 </p>
            </a>
          </div>
        </div>

        <div class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
          <a href="#">
            <img class="rounded-t-lg p-5 w-[250px] h-[250px] ob flex" :src="Nar" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold">Mg Narrative Gundam</h5>
              <p class="mb-2 text-md">₱ 3500.00 </p>
            </a>
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