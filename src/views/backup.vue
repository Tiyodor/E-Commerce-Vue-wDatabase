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
</script>

<template> <!--homebackup-->

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
</template>


  <script setup> 
import Rx from "/rg/Rx782.jpg";
import Nu from "/rg/nu.jpg";
import God from "/rg/god.jpg";
import Wing from "/rg/wing.jpg";
import Epyon from "/rg/epyon.jpg";
import Cali from "/hg/calibarn.jpg";

</script>
<template><!--product backup-->
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






<section>
  <div class="pt-10 px-10 mx-[360px]  bg-white select-none">
    <p class="font-semibold mx-[50px]  text-2xl">You may also like</p>

    <div class="pt-10 grid grid-cols-5 gap-20 justify-center mx-10">

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

<section>
   <transition name="slide">
        <div v-if="show" class="sidebar flex-col min-h-screen select-none" @click.self="closeSidebar">
          
          <!--side bar view mostly top-->
          <div class="mb-auto">
          <div class=" inline-flex">
            <p class="text-4xl pl-4 pb-9 pt-2 font-semibold ">Your Cart</p> <button class="mb-6 ml-72 "  @click="closeSidebar" >
              <X />
            </button>
          </div>
          <div class="space-x-[365px] flex pl-5 text-gray-500">

            <a>Product</a>
            <a>Total</a>
          </div>
          <div class="pt-10 grid grid-cols-2 mx-5 border-t-2 border-solid border-gray-200 mt-2 ">

            <div id="prodImg">
              <img class="rounded-2xl max-w-40 ml-4" :src="Rx" />
            </div>

            <div id="prodInfo">
              <div class="inline-flex">
                <p class="font-semibold text-[] pb-1 hover:underline">
                  RG 1/144 RX-78-2 Gundam Ver.2.0
                </p>

                <h5 class="text-base relative pb-3">₱2000.0
                </h5>
              </div>

              <div
                class="relative z-0 h-[50px] w-[150px] items-center justify-around rounded-3xl border border-black border-solid bg-white inline-flex">
                <button class="relative items-center text-3xl pb-2" @click="decrease">-</button>
                <span> 1 </span>
                <button class="relative text-2xl pb-2" @click="increase">+</button>

              </div>
              <button class="ml-6 ">
                <Trash2 color="#FF4646"/>
              </button>
            </div>
          </div>

          <!--other item-->
          <div class="pt-10 grid grid-cols-2 mx-5  mt-2 ">

            <div id="prodImg">
              <img class="rounded-2xl max-w-40 ml-4" :src="Cali" />
            </div>

            <div id="prodInfo">
              <div class="inline-flex">
                <p class="font-semibold text-[] pb-1 hover:underline">
                  Hg Gundam Calibarn Witch From Mercury
                </p>

                <h5 class="text-base relative pb-3">₱1500.0
                </h5>
              </div>

              <div
                class="relative z-0 h-[50px] w-[150px] items-center justify-around rounded-3xl border border-black border-solid bg-white inline-flex">
                <button class="relative items-center text-3xl pb-2" @click="decrease">-</button>
                <span>1</span>
                <button class="relative text-2xl pb-2" @click="increase">+</button>

              </div>
              <button class="ml-6 ">
                <Trash2 color="#FF4646"/>
              </button>
            </div>
          </div>
        </div>
        <!--siber bottom part-->
        <div class="mt-auto">
          <div class="space-x-[255px] flex pt-3 pb-3 border-t-2 border-solid border-gray-200 mx-5">
          <p class="text-xl font-semibold ">Estimated total </p>
          <p>₱3500.00</p>
          </div>
          <p class="flex pl-5 text-gray-500">Tax included and shipping and discounts calculated at checkout</p>
          <div  class="pb-4 pt-4 mx-14">
            <router-link to="/checkout">
            <button class="relative items-center text-lg border border-blue-600 border-solid rounded-3xl h-[45px]
             w-full bg-white hover:border-2 hover:border-blue-700 hover:bg-blue-400"  @click.self="closeSidebar">
              Check out
            </button>
            </router-link>
            </div>
        </div>
        </div>
      </transition>
</section>

<!--checkout backup-->

<div id="prodImg">
  <img class="rounded-2xl max-w-40 ml-4" :src="Rx" />
</div>

<div id="prodInfo" class="mt-14">
  <div class="flex">
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <p class="font-semibold  pb-1">
          RG 1/144 RX-78-2 Gundam Ver.2.0
      </p>
      &nbsp;
      &nbsp;
      &nbsp;
      <h5 class="text-base pb-3">₱2000.0
      </h5>
  </div>
</div>

<!--controller products-->
public function checkout($ids)
    {
        $productIds = explode(',', $ids); // Assuming IDs are comma-separated

        $products = [];

        foreach ($productIds as $id) {
            $product = Product::find($id);

            if ($product) {
                $product->product_image = url('/images/' . $product->product_image);
                $products[] = $product;
            }
        }

        if (empty($products)) {
            return response()->json([
                'message' => 'Products not found'
            ], 404);
        }

        return response()->json($products);
    }


    <!--for mock data-->

    onMounted(async () => {
  try {
    // Mock data for testing
const mockData = {
  id: 123,
  fname: "John",
  lname: "Doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
    country: "USA"
  },
  paymentMethod: "Credit Card",
  totalAmount: 4000,
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 2000,
      imageUrl: "/path/to/image1.jpg"
    },
    {
      id: 2,
      name: "Product 2",
      price: 2000,
      imageUrl: "/path/to/image2.jpg"
    }
  ]
};
    checkout.value = mockData;
    console.log('Mock data:', checkout.value);
  } catch (error) {
    console.error('Error fetching order data:', error);
  }
});