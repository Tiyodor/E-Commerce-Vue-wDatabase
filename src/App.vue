<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/footer.vue";
import Nav from "./components/navbar.vue";


</script>

<template>
  
  <!-- NavBar -->
  <Search />
 <Nav />
 <!-- <Searchbar />  -->


  <div class="app-body">
    <RouterView />
  </div>

  <!--Footer-->
  
 <Footer />
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

.app-body{
  min-height:100vh;
  font-family: "Rajdhani", sans-serif;
  font-weight: 500;
  font-style: normal;
  text-align: center;
}

</style>
