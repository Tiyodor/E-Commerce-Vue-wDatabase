<script setup>
import { Search } from 'lucide-vue-next';
import { ShoppingBag } from 'lucide-vue-next';
import { Trash2 } from 'lucide-vue-next';
import Logo from '/GundFactory.png';
import { RouterView } from "vue-router";
import { X } from 'lucide-vue-next';
import Cali from "/hg/calibarn.jpg";
import Rx from "/rg/Rx782.jpg";
</script>

<template>
  <!-- NavBar -->
  <div class="top-0 z-50 mx-10 mt-1 max-w-[1950px] select-none bg-white shadow-lg">
    <p class="text-md text-center font-semibold"><a
        href="https://www.instagram.com/tiyosgunpla/" target="_blank">Check This Out!!!</a></p>
    <p class="text-md text-center font-semibold">THIS IS A FAKE WEBSITE</p>
  </div>
  <div class="sticky top-0 z-50 mx-10 max-w-[1950px] select-none bg-white pt-2 shadow-lg">
    <div class="align-center mr-[150px] flex justify-center text-xl">
      <router-link to="/">
        <img class="mr-[150px] flex max-w-[250px] cursor-pointer" :src="Logo" />
      </router-link>
      <ul class="mr-20">
        <il class="m-10 inline-block"><router-link to="/"><button
              class="cursor-pointer hover:underline">Home</button></router-link></il>
        <il class="m-10 inline-block"><router-link to="/shop"><button
              class="cursor-pointer hover:underline">Shop</button></router-link></il>
        <il class="m-10 inline-block"><router-link to="/about"><button
           class="cursor-pointer hover:underline">About</button></router-link></il>
        <il class="m-10 inline-block"><arouter-link to="/"><button
           class="cursor-pointer hover:underline">News</button></arouter-link></il>
      </ul>
      <button
        className="ml-20 mr-10 cursor-pointer inline-block transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
        <Search />
      </button>
      <button
        className="cursor-pointer inline-block transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
        @click="show = !show, secondary = false">
        <ShoppingBag />
      </button>
    </div>
    <div>
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
      <div class="overlay" v-if="show" @click="closeSidebar"></div>
    </div>

  </div>

  <RouterView />

  <!--Footer-->
  
  <div class="b-20 relative mx-10 max-w-[1950px] select-none items-center border-t-[1px] border-gray-200 bg-[#f7f7f7] pb-5 pt-12">
    <div class="flex justify-evenly">
      <div class="relative justify-center text-lg">
        <p class="font-bold">Links</p>
        <ul class="max-w-md list-inside space-y-2">
          <li>
            <a class="text-gray-400 hover:underline" href="">Terms and Conditions</a>
          </li>
          <li>
            <a class="text-gray-400 hover:underline" href="">Refund Policy</a>
          </li>
          <li>
            <a class="text-gray-400 hover:underline" href="">Payment Method</a>
          </li>
          <li>
            <a class="text-gray-400 hover:underline" href="">Shipping Policy</a>
          </li>
        </ul>
      </div>

      <div class="relative justify-center text-lg">
        <p class="font-bold">Contact us</p>
        <ul class="max-w-md list-inside space-y-2">
          <li>
            <a class="text-gray-400" href="https://www.facebook.com/pinoymandelaepekz/">Facebook: <span
                class="font-semibold text-black hover:underline">facebook.com/gundfactory</span></a>
          </li>
          <li>
            <a class="text-gray-400" href="">Email: <span class="font-semibold text-black hover:underline">
                gundfactory@gmail.com </span></a>
          </li>
          <li>
            <a class="text-gray-400" href="">Mobile: <span class="font-semibold text-black hover:underline">
                094321433</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="mx-10 mb-5 max-w-[1950px] select-none items-center border-t-[1px] border-gray-200 bg-white pt-8">
    <span class="flex justify-center text-gray-400">© 2024, GundFactory Powered by mama mo</span>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      show: false
        };
  },
  methods: {
    closeSidebar() {
      this.show = false;
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 500px;
  background: white;
  display: flex;
  height: 991px;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* Dimming effect */
  z-index: 1;
}

.nav-li {
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}

.slide-enter {
  transform: translateX(300px);
}

.slide-enter-active {
  transition: all .3s ease-in;
}

.slide-leave-active {
  transition: all .3s ease-in;
}

.slide-leave-to {
  transform: translateX(300px);
}
</style>
