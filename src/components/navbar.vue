<script setup>
import { ref, onMounted, watch } from 'vue';
import { Search, ShoppingBag, Trash2, X, AlignJustify } from 'lucide-vue-next';
import Logo from '/GundFactory.png';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { toggleSearch } from './Search.vue';
import Searchbar from './Search.vue';

const store = useStore();
const showMenu = ref(false); // Define the showMenu property
const route = useRoute();
const show = ref(false);
const selectedProduct = ref([]);
const id = ref(localStorage.getItem('checkoutProductId'));
localStorage.removeItem('checkoutProductId');


watch(() => store.state.showSidebar, (newValue) => {
  show.value = newValue;
});

watch(() => store.state.selectedProduct, (newValue) => {
  selectedProduct.value = newValue;
});

watch(() => store.state.showSidebar, (newValue) => {
  showMenu.value = newValue;
});


const toggleShoppingBag = () => {
  store.state.showSidebar = !store.state.showSidebar;
  
};

const toggleCheckout = (id) => {
  // Set the selected product ID in localStorage
  localStorage.setItem('selectedProductId', id);
  store.state.showSidebar = !store.state.showSidebar;

};


const removeFromCart = (index) => {
  store.commit('removeFromCart', index);
};

const products = computed(() => store.getters.products);
const total = computed(() => store.getters.cartTotal);

const closeSidebar = () => {
  store.state.showSidebar = false;
};


</script>

<template>

  <div class="nav top-0 z-50 md:mx-10 mt-1 md:max-w-auto select-none bg-white shadow-lg">
    <p class="text-md text-center font-semibold hover:underline">
      <a href="https://www.instagram.com/tiyosgunpla/" target="_blank">Check This Out!!!</a>
    </p>
    <p class="text-md text-center font-semibold">THIS IS A FAKE WEBSITE</p>
  </div>

  <div class="sticky justify-center md:flex top-0 z-40 md:mx-10 max-w-[1950px] select-none bg-white pt-2 shadow-lg">
   
    <div class="align-center md:mr-[150px] flex justify-center text-xl">
      <Searchbar />
      <button class="navbar-toggle md:hidden" @click="toggleMenu">
        <AlignJustify />
      </button>
      <div class="navbar-logo w-[250px] ">
        <router-link to="/">
          <img class="cursor-pointer" :src="Logo" />
        </router-link>
      </div>
      <div class="navbar-menu md:mx-32">

        <ul :class="{ 'navbar-links-active': showMenu }" class="text-2xl navbar-links">
          <li class="md:m-10 inline-block"><router-link to="/"><button
                class="cursor-pointer hover:underline">Home</button></router-link></li>
          <li class="md:m-10 inline-block"><router-link to="/shop"><button
                class="cursor-pointer hover:underline">Shop</button></router-link></li>
          <li class="md:m-10 inline-block"><router-link to="/about"><button
                class="cursor-pointer hover:underline">About</button></router-link></li>
          <li class="m-10 inline-block"><router-link to="/news"><button
                class="cursor-pointer hover:underline">News</button></router-link></li>
        </ul>
      </div>

      <div class="navbar-icons md:mt-2">
        <button
          className="ml-20 mr-10 cursor-pointer inline-block transition 
          ease-in-out delay-10 hover:-translate-y-1 
          hover:scale-110"  @click="toggleSearch">
          <Search />
        </button>
        <button class="cursor-pointer inline-block transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
          @click="toggleShoppingBag">
          <ShoppingBag />
        </button>

      </div> 
      
      
      <!-- Cart Sidebar -->

      <div>
        <transition name="slide">
          <div v-if="show" class="sidebar  flex-col min-h-screen select-none flex md:w-[500px] "
            @click.self="closeSidebar">

            <!--side bar view mostly top-->
            <div class="mb-auto">
              <div class="md:inline-flex">
                <p class="text-4xl pl-4 pb-9 pt-2 font-semibold ">Your Cart</p> <button class="md:mb-6 ml-72 "
                  @click="closeSidebar">
                  <X />
                </button>
              </div>

              <div class="md:space-x-[365px] md:flex pl-5 text-gray-500">

                <a>Product</a>
                <a>Total</a>
              </div>

              <div class="pt-10 mx-5 border-t-2 border-solid border-gray-200 mt-2">
                <div v-for="(product, index) in products" :key="index" class="product flex mb-10">
                  <div id="prodImg">
                    <img class="rounded-2xl max-w-40 ml-4" :src="product.product_image" />
                  </div>

                  <div id="prodInfo" class="md:ml-4">
                    <p class="font-semibold text-lg pb-1 hover:underline">
                      {{ product.category }} {{ product.name }} {{ product.id }}
                    </p>
                    <div class="md:inline-flex">
                      <h5 class="text-base md:relative pb-3">₱{{ product.price }}</h5>
                    </div>
                    <br>
                    <div
                      class="relative z-0 h-[50px] w-[150px] items-center justify-around rounded-3xl border border-black border-solid bg-white inline-flex">
                      <button class="relative items-center text-3xl pb-2" @click="decrease">-</button>
                      <span> 1 </span>
                      <button class="relative text-2xl pb-2" @click="increase">+</button>
                    </div>
                    <button class="md:ml-6 " @click="removeFromCart(index)">
                      <Trash2 color="#FF4646" />
                    </button>
                  </div>
                </div>
              </div>


            </div>
            <!--siber bottom part-->
            <div class=" bg-white sticky z-0 bottom-0 mt-auto">
              <div class=" md:space-x-[255px] flex pt-3 pb-3 border-t-2 border-solid border-gray-200 mx-5">
                <p class="text-xl font-bold ">Estimated total </p>
                <p class="font-semibold">₱{{ total }}</p>
              </div>
              <p class="flex pl-5 text-gray-500">Tax included and shipping and discounts calculated at checkout</p>
              <div class="pb-4 pt-4 mx-14">
                <!-- <router-link v-if="selectedProduct.value" :to="`/checkouts/${selectedProduct.value.id}`">
      <button class="relative items-center text-lg border border-blue-600 border-solid rounded-3xl h-[45px] w-full bg-white hover:border-2 hover:border-blue-700 hover:bg-blue-400" @click.self="closeSidebar">
        Check out
      </button>
    </router-link> -->
    <router-link v-if="selectedProduct && show" :to="`/checkouts`" @click="closeSidebar">
    <button class="relative items-center text-lg border border-blue-600 border-solid rounded-3xl h-[45px] w-full bg-white hover:border-2 hover:border-blue-700 hover:bg-blue-400" @click="toggleCheckout(selectedProduct.id)">
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
import { computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const show = computed(() => store.state.showSidebar);

    watch(() => store.state.showSidebar, (newValue) => {
      show.value = newValue;
    });

    const toggleCheckout = (id) => {
  // Set the selected product ID in localStorage
  localStorage.setItem('selectedProductId', id);
  // Toggle the showSidebar state to open/close the checkout sidebar
  store.state.showSidebar = !store.state.showSidebar;
}
    const closeSidebar = () => {
      store.state.showSidebar = false;
    };

    return {
      show,
      toggleCheckout,
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
  background: white;
  display: flex;
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

.nav,
li,
.sidebar {
  font-family: "Rajdhani", sans-serif;
  font-weight: 500;
  font-style: normal;
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

  /* Adjust as needed */
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
