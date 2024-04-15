<script setup>
import Rx from "/rg/Rx782.jpg";
</script>

<template>
    <div class="relative content-center mx-10">
        <div class="grid grid-cols-2 gap-5">

            <div class="  relative ml-[250px] p-10">
                <p class="text-xl font-semibold">Contact</p>
                <input type="text" id="email" name="email" placeholder="Email" class="w-full" />
                <p class="text-xl font-semibold">Payment</p>

                <!-- Radio Button for Bank Deposit -->
                <div class="border rounded-t-lg pt-2 bg-inherit">
                <div class="flex items-center mb-4  px-4">
                    <input id="default-radio-1" type="radio" name="payment-method" value="bank-deposit"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-1" class="ml-2 text-lg font-medium text-gray-900">Bank Deposit</label>
                </div>
                <div id="bank-details" class="hidden bg-[#f5f5f5] items-center w-full border-t-2 pl-52 pb-2">
                    <p>BPI</p>
                    <p>Elijah Theodore Yabut</p>
                    <p>Account number - XXXX-XXXX-XXXX</p>
                    <p>Sea Bank</p>
                    <p>Elijah Theodore Yabut</p>
                    <p>Account number - XXXX-XXXX-XXXX</p>
                </div>
            </div>

                <!-- Radio Button for Online Payment -->
                <div class="border rounded-b-lg pt-2 bg-inherit">
                <div class="flex items-center mb-4 px-4 ">
                    <input id="default-radio-2" type="radio" name="payment-method" value="online-payment"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-2" class="ml-2 text-lg font-medium text-gray-900">Online Payment</label>
                </div>
                <div id="online-details" class="hidden bg-[#f5f5f5] items-center w-full pl-52 border-t-2 pb-2">
                    <p>Gcash</p>
                    <p>Number: 09666517365</p>
                    <p>MAYA</p>
                    <p>Number: 09666517365</p>
                    <p>Paypal</p>
                    <p>Number: 09666517365</p>
                </div>
                </div>



                <p class="text-xl font-semibold">Billing Address</p>
                <input type="text" id="fname" name="firstname" placeholder="First Name" class="w-1/2 pr-2" />
                <input type="text" id="lname" name="lastname" placeholder="Last Name" class="w-1/2" />
                <input type="text" id="address" name="address" placeholder="Address" class="w-full" />
                <input type="text" id="postal" name="postal" placeholder="Postal Code" class="w-1/2" />
                <input type="text" id="city" name="city" placeholder="City" class="w-1/2" />
                <input type="number" id="phone" name="phone" placeholder="Phone" class="w-full" />
                <button class="w-full rounded-md text-white h-12 bg-blue-500 mt-2"> Complete Order </button>

            </div>

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
document.addEventListener('DOMContentLoaded', function () {
    var radios = document.querySelectorAll('input[name="payment-method"]');
    var bankDetails = document.getElementById('bank-details');
    var onlineDetails = document.getElementById('online-details');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            // Hide both sections first
            bankDetails.classList.add('hidden');
            onlineDetails.classList.add('hidden');

            // Check which radio is checked and show the corresponding section
            if (document.getElementById('default-radio-1').checked) {
                bankDetails.classList.remove('hidden');
            } else if (document.getElementById('default-radio-2').checked) {
                onlineDetails.classList.remove('hidden');
            }
        });
    });
});
</script>


<style scoped>
input[type=text],
input[type=number],
select {

    padding: 14px 22px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
</style>