<script setup>
import BPI from '/bpi.png';
import GCASH from '/gcash.jpg';
import SEA from '/seabank.jpg';

</script>

<template>
    <div class="relative content-center text-center mx-10 select-none">
        <div class="pt-10 px-10 bg-white ">
            <h1 class="text-6xl font-bold">
                Payment Method
            </h1>

            <div class="pb-10 pt-10">
                <p class="text-left mx-[500px] text-2xl font-bold text-gray-700 pb-4">Make a Screenshot or clear photo of your payment and send it to</p>
                <ul class="text-left mx-[500px] list-disc text-gray-500 text-xl font-bold">
                    <li>
            <a class="text-blue-500" href="https://www.facebook.com/pinoymandelaepekz/">Facebook: <span
                class="font-semibold text-black hover:underline">facebook.com/gundfactory</span></a>
          </li>
          <li>
            <a class="text-gray-600" href="">Email: <span class="font-semibold text-black hover:underline">
                gundfactory@gmail.com </span></a>
          </li>
          </ul>
          <a class="text-gray-600 font-semibold text-lg"><span class="text-black text-xl font-bold">Reminders:</span> 
            For validation of payment, allowed us 24 hours to confirm or verify it.</a>
            </div>

            <div class="pb-10 pt-10">
                <p class="text-left mx-[500px] text-4xl font-bold text-gray-700 pb-4">Bank Transfer </p>
                <ul class="text-left mx-[500px] list-disc text-gray-500 text-lg font-semibold">
                    <li>BPI</li>
                    <a>Name: Elijah Theodore Yabut </a><br>
                    <a>Account Number - XXX-XXXX-XXXX</a><br>
                    <img class="w-[350px] h-[350px]" :src="BPI">
                </ul>
            </div>

            <div class="pb-10 pt-10">
                <p class="text-left mx-[500px] text-4xl font-bold text-gray-700 pb-4">E-Wallet Transfer</p>
                <ul class="text-left mx-[500px] list-disc text-gray-500 text-lg font-semibold">
                    <li>GCASH</li>
                    <a>Name: Elijah Theodore Yabut </a><br>
                    <a>Gcash Number - XXX-XXXX-XXXX</a><br>
                    <img class="w-[350px] h-[350px]"  :src="GCASH">
                    <li>SEA BANK</li>
                    <a>Name: Elijah Theodore Yabut </a><br>
                    <a>SEA BANK Number - XXX-XXXX-XXXX</a><br>
                    <img class="w-[270px] h-[250px]"  :src="SEA"> 

                </ul>
            </div>

          
           
        </div>
    </div>
</template>