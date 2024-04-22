<script setup>
import { CircleCheckBig } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const checkout = ref({});
const route = useRoute();

onMounted(async () => {
  try {
    await fetchOrderData(route.params.checkoutid);
  } 
  catch (error) {
    console.error('Error fetching order data:', error);
  }
});

async function fetchOrderData(checkoutid) {
  try {
    const response = await fetch(`http://localhost:8000/api/order/success/${checkoutid}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    checkout.value = data;
    console.log('Fetched order data:', data);
  } catch (error) {
    console.error('Error fetching order data:', error);
  }
}

</script>

<template>
    <div class="relative content-center mx-10 select-none">
        <div class="grid grid-cols-2 gap-5">

            <div class="  relative ml-[250px] p-10">
               
               <div class="inline-flex right-12 relative mb-6" >
                <CircleCheckBig color="#327efc" class="relative right-4 size-12" />
                <div class="relative">
                <p class="text-sm">Order #{{ checkout.id }}</p>
               <p class="text-2xl">Thank you, {{ checkout.fname }} {{ checkout.lname }}!</p>
            </div>

            </div>
                <div class="border-2 w-full p-6 mb-6">
                    <p>
                       <span class="text-xl font-semibold"> Your order is confirmed </span><br>
                        To confirm and validate your payment, please send a clear picture of your deposit slip to gundfactory@gmail.com.<br>
                        You may also message us on Facebook. Our FB page is <a href="/" class="hover:underline"> https://www.facebook.com/tiyodoryabutV2/</a>
                    </p>
                </div>

                <div class="border-2 w-full p-6 content-center ">
                    <p class="text-xl">Order details</p>
             <div class="flex">
                <div class="relative p-3 w-1/2"> 
                    <p class="font-semibold">Contact information </p>   
                    <p> {{ checkout.email }}</p>  
                   <p class="font-semibold"> Billing address </p>
                        <p> {{ checkout.fname }} {{ checkout.lname }}</p>
                        <p> {{ checkout.address }} {{ checkout.city }}</p>
                        <p> {{ checkout.postal }}</p>
                        <p> {{ checkout.phone }}</p>
                </div>
                <div class="relative p-3 w-1/2"> 
                    <p class="font-semibold"> Payment method</p>
                    <p> {{ checkout.payment }}- ₱{{checkout.total }}</p>
                    <router-link to="/payment-method">
                      <a class="hover:underline">Payment click here to pay with your corresponding payment method</a>
                    </router-link>
                       
                </div>
             </div>
                </div>
                

                <router-link to="/">
                <button class=" bg-blue-500 mt-2 w-1/2 float-end rounded-md text-white h-12">
                Continue Shopping 
                </button></router-link>

            </div>
<!-- Product side -->
<div class="relative bg-[#f5f5f5] p-10 border-l-2 border-gray-200">
    <div v-for="(product, index) in checkout.products" :key="index" class="product flex mb-10">
      <div id="prodImg">
        <img class="rounded-2xl max-w-40 " :src="product.image" alt="Product Image" />
      </div>
      <div id="prodInfo" class="mt-14">
        <div class="ml-16 space-x-16 grid grid-col-6 gap-4">
          <div class="col-start-1">
            <p class="font-bold text-lg pb-1">{{ product.category }} {{ product.name }}</p>
          </div>
          <div class="col-start-2">
            <h5 class="text-lg pb-3 text-end">₱{{ product.price }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-flex pt-4 border-t-2 border-gray-200 mt-6 text-end">
      <p class="text-xl mr-[410px] font-semibold">Total: </p>
      <p class="text-lg font-bold">₱{{ checkout.total }}</p>
    </div>
  </div>

        </div>
    </div>
</template>

<script>
export default {
  props: {
    checkout: Object 
  }
};
</script>


<style scoped>

</style>