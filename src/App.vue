<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/footer.vue";
import Nav from "./components/navbar.vue";


</script>

<template>
  <!-- NavBar -->
 <Nav />

  <div class="app-body">
    <RouterView />
  </div>

  <!--Footer-->
  
 <Footer />
</template>



<style scoped>
.app-body{
  min-height:100vh;
}

</style>
