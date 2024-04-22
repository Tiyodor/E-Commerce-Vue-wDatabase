<script setup>
import { ref, watch } from 'vue';
import { Search, ShoppingBag, Trash2, X, AlignJustify } from 'lucide-vue-next';
import Logo from '/GundFactory.png';
import { useStore } from 'vuex';

const store = useStore();
const show = ref(false);
const selectedProduct = ref(null);

watch(() => store.state.showSidebar, (newValue) => {
  show.value = newValue;
});

watch(() => store.state.selectedProduct, (newValue) => {
  selectedProduct.value = newValue;
});

const toggleMenu = () => {
  store.state.showSidebar = !store.state.showSidebar;
};

const toggleShoppingBag = () => {
  store.state.showSidebar = !store.state.showSidebar;
};

const removeFromCart = (index) => {
  store.commit('removeFromCart', index);
};

const cartItems = computed(() => store.getters.cartItems);
const total = computed(() => store.getters.cartTotal);

const closeSidebar = () => {
  store.state.showSidebar = false;
};

const checkout = () => {
  if (selectedProduct.value) {
    router.push(`/checkout/${selectedProduct.value.id}`);
    closeSidebar();
  }
};
</script>

<template>

    <div class="top-0 z-50 md:mx-10 mt-1 max-w-[1950px] select-none bg-white shadow-lg">
      <p class="text-md text-center font-semibold hover:underline">
        <a href="https://www.instagram.com/tiyosgunpla/" target="_blank">Check This Out!!!</a>
      </p>
      <p class="text-md text-center font-semibold">THIS IS A FAKE WEBSITE</p>
    </div>

    <div class="sticky justify-center md:flex top-0 z-50 md:mx-10 max-w-[1950px] select-none bg-white pt-2 shadow-lg">
      <div class="align-center md:mr-[150px] flex justify-center text-xl">
        <button class="navbar-toggle md:hidden" @click="toggleMenu">
          <AlignJustify />
          </button>
        <div class="navbar-logo w-[250px] ">
          <router-link to="/">
            <img class="cursor-pointer" :src="Logo" />
          </router-link>
        </div>
        <div class="navbar-menu md:mx-32">
        
          <ul :class="{ 'navbar-links-active': showMenu }" class="navbar-links">
            <li class="md:m-10 inline-block"><router-link to="/"><button class="cursor-pointer hover:underline">Home</button></router-link></li>
            <li class="md:m-10 inline-block"><router-link to="/shop"><button class="cursor-pointer hover:underline">Shop</button></router-link></li>
            <li class="md:m-10 inline-block"><router-link to="/about"><button class="cursor-pointer hover:underline">About</button></router-link></li>
            <li class="m-10 inline-block"><router-link to="/news"><button class="cursor-pointer hover:underline">News</button></router-link></li>
          </ul>
        </div>

        <div class="navbar-icons md:mt-2">
          <button className="ml-20 mr-10 cursor-pointer inline-block transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <Search />
          </button>
          <button class="cursor-pointer inline-block transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110" @click="toggleShoppingBag">
      <ShoppingBag />
    </button>
     
        </div>  <!-- Cart Sidebar -->
    <div>
      <transition name="slide">
        <div v-if="show" class="sidebar  flex-col min-h-screen select-none md:flex md:w-[400px]" @click.self="closeSidebar">
          
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

          <div class="pt-10 mx-5 border-t-2 border-solid border-gray-200 mt-2">
  <div v-for="(product, index) in cartItems" :key="index" class="product flex mb-10">
    <div id="prodImg">
      <img class="rounded-2xl max-w-40 ml-4" :src="product.product_image" />
    </div>

    <div id="prodInfo" class="ml-4">
      <p class="font-semibold text-lg pb-1 hover:underline">
        {{ product.category }} {{ product.name }}
      </p>
      <div class="inline-flex">
        <h5 class="text-base relative pb-3">₱{{ product.price }}</h5>
      </div>
      <br>
      <div class="relative z-0 h-[50px] w-[150px] items-center justify-around rounded-3xl border border-black border-solid bg-white inline-flex">
        <button class="relative items-center text-3xl pb-2" @click="decrease">-</button>
        <span> 1 </span>
        <button class="relative text-2xl pb-2" @click="increase">+</button>
      </div>
      <button class="ml-6 " @click="removeFromCart(index)">
  <Trash2 color="#FF4646"/>
</button>
    </div>
  </div>
</div>

        
        </div>
        <!--siber bottom part-->
        <div class="">
          <div class="space-x-[255px] flex pt-3 pb-3 border-t-2 border-solid border-gray-200 mx-5">
          <p class="text-xl font-semibold ">Estimated total </p>
          <p>{{ total }}</p>
          </div>
          <p class="flex pl-5 text-gray-500">Tax included and shipping and discounts calculated at checkout</p>
          <div  class="pb-4 pt-4 mx-14">
            <router-link v-if="selectedProduct" :to="`/checkout/${selectedProduct.value.id}`">
        <button class="absolute items-center text-lg border border-blue-600 border-solid rounded-3xl h-[45px] w-full bg-white hover:border-2 hover:border-blue-700 hover:bg-blue-400" @click="checkout">
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
    
    </div>

    


</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
  const store = useStore();
  const show = computed(() => store.state.showSidebar);
  const selectedProduct = computed(() => store.state.selectedProduct.value);

  watch(() => store.state.showSidebar, (newValue) => {
    show.value = newValue;
  });

  const closeSidebar = () => {
    store.state.showSidebar = false;
  };

  return {
    show,
    selectedProduct,
    closeSidebar
  };
}

};
</script>


<style scoped>

.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 500px;
  background: white;
  display: flex;
  height: auto;
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

.slide-enter,
.slide-leave-to {
  transform: translateX(300px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all .3s ease-in;
}




.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}



.navbar-menu {
  display: flex;
  align-items: center;
}


.navbar-toggle-icon {
  width: 25px;
  height: 3px;
  background-color: #000;
  display: block;
}

.navbar-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 10;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  overflow: hidden;
}

.navbar-links-active {
  max-height: 400px;
  background: white;/* Adjust as needed */
}



.navbar-icons button {
  background: none;
  border: none;
  cursor: pointer;
  margin: 10px;
  margin-top: 50px;
}



@media screen and (min-width: 768px) {
  .navbar-menu {
    flex: 1;
    justify-content: flex-end;
  }

  .navbar-links {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    max-height: none;
    overflow: visible;
    border: none;
    box-shadow: none;
  }

  .navbar-links-active {
    display: flex;
    max-height: none;
    overflow: visible;
  }
}
</style>
