<script setup>
import Rx from "/rg/Rx782.jpg";
import { CircleCheckBig } from 'lucide-vue-next';
</script>

<template>
    <div class="relative content-center mx-10 select-none">
        <div class="grid grid-cols-2 gap-5">

            <div class="  relative ml-[250px] p-10">
               
               <div class="inline-flex right-12 relative mb-6">
                <CircleCheckBig color="#327efc" class="relative right-4 size-12" />
                <div class="relative">
                <p class="text-sm">Order #here</p>
               <p class="text-2xl">Thank you, User's name!</p>
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
                    <p> elijahtheodoreyabut@gmail.com</p>  
                   <p class="font-semibold"> Billing address </p>
                        <p> Elijah Theodore Yabut</p>
                        <p> 21 C Santos St. Ugong Pasig City</p>
                        <p> Barangay Ugong</p>
                        <p> 1604 pasig city</p>
                        <p> 00</p>
                        <p> Philippines</p>
                        <p> 09666517365</p>
                </div>
                <div class="relative p-3 w-1/2"> 
                    <p class="font-semibold"> Payment method</p>
                    <p> Bank Deposit - ₱400.00</p>
                    <p> Bank Details</p>
                    <p>BPI</p>
                    <p>Elijah Theodore Yabut</p>
                    <p>Account number - XXXX-XXXX-XXXX</p>
                    <p>Sea Bank</p>
                    <p>Elijah Theodore Yabut</p>
                    <p>Account number - XXXX-XXXX-XXXX</p>
                       
                </div>
             </div>
                </div>
                

                <router-link to="/">
                <button class=" bg-blue-500 mt-2 w-1/2 float-end rounded-md text-white h-12">
                Continue Shopping 
                </button></router-link>

            </div>

            <!--product side-->
            <div class="relative bg-[#f5f5f5] p-10 border-l-2 border-gray-200">

                <div class="product flex mb-10">
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
                </div>


                <div class="product flex">
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
                </div>


                <div class="inline-flex pt-4 border-t-2 border-gray-200 mt-6 ">
                    <p class="text-xl mr-[410px] font-semibold">Total: </p>
                    <p class="text-lg">₱4000.00 </p>

                </div>
            </div>

        </div>
    </div>
</template>

<script>

</script>


<style scoped>

</style>