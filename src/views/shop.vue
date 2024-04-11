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
import { ArrowUpDown } from 'lucide-vue-next';
import { List } from 'lucide-vue-next';



</script>

<template>
    <!--Categories-->
    <section>
        <div class="top-80 z-0 absolute px-20  select-none">
        <div class="inline-flex pb-5">
            <List />  <a>
 Categories </a>
        </div>
        <div class="border-t-2 border-solid border-gray-200 pt-5"> 
            <ul class="space-y-5 max-w-md list-inside">
                <li>
 <a class="text-gray-400 hover:underline hover:text-black hover:text-lg" href="">
                    Entry Grade
                </a>
</li>
                <li>
 <a class="text-gray-400 hover:underline hover:text-black hover:text-lg" href="">

                    High Grade
                </a>
</li>
                <li>
 <a class="text-gray-400 hover:underline hover:text-black hover:text-lg" href="">

                    Real Grade
                </a>
</li>
                <li>
 <a class="text-gray-400 hover:underline hover:text-black hover:text-lg" href="">

                    Master Grade
                </a>
</li>

                <li>
 <a class="text-gray-400 hover:underline hover:text-black hover:text-lg" href="">

                    Super Deformed
                </a>
</li>
                <li>
 <a class="text-gray-400 hover:underline hover:text-black hover:text-lg" href="">

                    Perfect Grade
                </a>
</li>
                <li>
 <a class="text-gray-400 hover:underline hover:text-black hover:text-lg" href="">

                    Hi-Resolution
                </a>
</li>
                <li>
 <a class="text-gray-400 hover:underline hover:text-black hover:text-lg" href="">

                    1/100
                </a>
</li>
            </ul>
        </div>
        </div>
    </section>
    
    <!--items-->
        <section>
      <div class="pt-10 px-10 mx-[180px] bg-white  select-none">
         
                  <p class="flex font-semibold ml-[40px] text-[50px]">Shop</p>

            <div class="inline-flex ml-[40px] "> 
            <p>Sort</p> <!--can sort by availability and price-->
            <button> 
                <ArrowUpDown />
            </button>
             </div>
        <div class="pt-10 grid grid-cols-5 gap-5 mx-10">

          <router-link to="/product"
            class="mb-5 relative w-[250px] rounded-lg border border-black max-h-sm bg-white shadow transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
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

        </div>
      </div>
    </section>
  
</template>