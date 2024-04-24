<template>
    <div class="">
    <transition name="slide">
      <div v-if="showSearch" class="searchbar fixed z-50 justify-center flex top-0 mx-10 right-10 w-full select-none bg-white pt-2">
        <div class="align-center flex text-xl p-10">
          <input class="static flex w-[750px] justify-between rounded-full border-2 border-black p-2" type="text" placeholder="Search" />
  
          <div class="absolute inline-flex transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 right-[440px] items-center pl-3">
            <button>  
              <Search />
            </button>
          </div>
  
          <div class="mb-1 p-1 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
            <button class="text-3xl" @click="toggleSearch">X</button>
          </div>
        </div>


      </div>
    </transition>   
         <!-- <div class="overlay"></div> -->
        </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { Search } from 'lucide-vue-next';
  </script>
  
  <script>
    const showSearch = ref(false);
    // Define toggleSearch function
    const toggleSearch = () => {
      showSearch.value = !showSearch.value;
    };
  
    // Export toggleSearch function
    export { toggleSearch };
  </script>
  
  <style scoped>


  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    overflow:hidden;
    z-index: 1;
  }
  
  /* .slide-enter {
    transform: translateY(-200px);
  }
  
  .slide-enter-active {
    transition: all .3s ease-in;
  } */
  
  /* .slide-leave-active {
    transition: all .3s ease-in;
  }
  
  .slide-leave-to {
    transform: translateY(-1000px);
  } */
  </style>
  