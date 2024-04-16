<script setup>
import Rx from "/rg/Rx782.jpg";
import Nu from "/rg/nu.jpg";
import God from "/rg/god.jpg";
import Wing from "/rg/wing.jpg";
import Epyon from "/rg/epyon.jpg";
import Cali from "/hg/calibarn.jpg";

</script>
<template>
  <div class="relative content-center mx-10 ">
    <!--product info-->
    <section>
    <div class="pt-10 px-10 mx-[180px] select-none">
    <div class="pt-10 grid grid-cols-2 gap-20 mx-60 ">
        <!-- image -->           
        <div id="prodImg">
                <img class="rounded-2xl" :src="Rx" />
            </div>
            
        <!-- product information-->
            <div id="prodInfo"> 

            <p class="font-semibold text-5xl pb-4">
                RG 1/144 RX-78-2 Gundam Ver.2.0
            </p>

            <h5 class="text-2xl pb-3">₱ 2000.0<br><span class="text-base text-gray-400 pb-4"> Tax Included. </span></h5>

            <h4 class="text-xl pb-4 opacity-65">
                Low stock: 5 left <span class="inline-flex absolute h-4 w-4">
             <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex h-4 w-4 rounded-full bg-orange-500"> </span>
                 </span>
            </h4>

            <div class="pb-3">
            <h5 class="text-base pb-1">Quantity</h5>
            <div class="relative z-0 flex h-[50px] w-[150px] items-center justify-around rounded-3xl border border-black border-solid bg-white ">
            <button class="relative items-center text-6xl pb-4" @click="decrease">-</button>
                 <span>{{counter}}</span>
             <button class="relative text-5xl pb-3 " @click="increase">+</button>
            </div>
            </div>

            <div  class="pb-3">
            <button class=" relative items-center text-2xl border border-yellow-600 border-solid rounded-3xl h-[50px]
             w-full bg-white hover:border-2 hover:border-yellow-700 hover:bg-yellow-400">
              Add to cart
            </button>
            </div>

            <div  class="pb-3">
            <button class="relative items-center text-2xl border border-blue-600 border-solid rounded-3xl h-[50px]
             w-full bg-white hover:border-2 hover:border-blue-700 hover:bg-blue-400">
              Buy it now
            </button>
            </div>

            <h4 class="pb-1">Deadline of Order: Till stock last</h4>
            <h4 class="pb-7">Estimated Arrival: OCT 2024</h4>
            <h4 class="pb-1">Downpayment: Php 400.00</h4>
            <h4 class="pb-7">Price: Php 1,900.00</h4>
            <h4 class="pb-7 font-bold text-lg opacity-65" >***Shipping fees are not included in all pre-order items.***</h4>
            <div class="pb-7">
            <h4>Please read the following link for more info.</h4>
            <ul class="max-w-md list-inside space-y-2 opacity-70">
          <li>
            <a class="hover:underline" href="">Terms and Conditions</a>
          </li>
          <li>
            <a class="hover:underline" href="">Refund Policy</a>
          </li>
          <li>
            <a class="hover:underline" href="">Payment Method</a>
          </li>
          <li>
            <a class="hover:underline" href="">Shipping Policy</a>
          </li>
        </ul>
    </div>
            <h3 class="font-bold text-lg pb-1">Should you have any question or item/s inquiry, please send us a message.</h3>
            <ul>
                <li>
            <a class="text-gray-400 pb-1" href="https://www.facebook.com/pinoymandelaepekz/">Facebook: <span class="font-bold text-black hover:underline">facebook.com/gundfactory</span></a>
          </li>
          <li>
            <a class="text-gray-400 pb-1" href="">Email: <span class="font-bold text-black hover:underline"> gundfactory@gmail.com </span></a>
          </li>
            </ul>
            </div>

        </div>
        </div>
    </section>

    <!--Recommended-->
    <section>
      <div class="pt-10 px-10 mx-[360px]  bg-white select-none">
        <p class="font-semibold mx-[50px]  text-2xl">You may also like</p>

        <div class="pt-10 grid grid-cols-5 gap-20 justify-center mx-10">

          
            <div class="mb-5 relative w-[200px] h-[320px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[200px] h-[200px] ob flex" :src="Cali" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Hg Calibarn Gundam</h5>
                <p class="mb-2 text-md">₱ 1400.00 </p>
              </a>
            </div>
          </div>


          <router-link to="/product" class="mb-5 relative  w-[200px] h-[320px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[200px] h-[200px] ob flex" :src="Nu" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Rg Rx93 Hi-Nu</h5>
                <p class="mb-2 text-md">₱ 3200.00 </p>
              </a>
            </div>
          </router-link>

           <router-link to="/product" class="mb-5 relative  w-[200px] h-[320px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[200px] h-[200px] ob flex" :src="God" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Rg God Gundam</h5>
                <p class="mb-2 text-md">₱ 2600.00 </p>
              </a>
            </div>
          </router-link>

           <router-link to="/product" class="mb-5 relative  w-[200px] h-[320px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[200px] h-[200px] ob flex" :src="Wing" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold">Rg Wing Gundam</h5>
                <p class="mb-2 text-md">₱ 1900.00 </p>
              </a>
            </div>
          </router-link>

           <router-link to="/product" class="mb-5 relative  w-[200px] h-[320px] rounded-lg border border-black max-h-sm bg-white shadow 
            transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:underline">
            <a href="#">
              <img class="rounded-t-lg p-5 w-[200px] h-[200px] ob flex" :src="Epyon" alt="" />
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
    </div>
</template>

<script>
</script>