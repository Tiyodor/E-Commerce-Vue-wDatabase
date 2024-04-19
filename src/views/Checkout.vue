<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
const products = ref([]);
const total = ref(0);
const route = useRoute();

// Fetch product data whenever route changes
watch(() => route.params.ids, async (newIds) => {
    await fetchProductData(newIds);
});

onMounted(async () => {
    // Fetch product data when component is mounted
    await fetchProductData(route.params.ids);
});

async function fetchProductData(ids) {
    const response = await fetch(`http://localhost:8000/api/products/checkout/${ids}`);
    const data = await response.json();
    products.value = data;
    calculateTotal();
}

function calculateTotal() {
    total.value = products.value.reduce((acc, product) => acc + parseFloat(product.price), 0);
}

// Form data
const formData = ref({
    email: '',
    paymentMethod: '',
    bankAccountName: '',
    bankAccountNumber: '',
    bankName: '',
    gcashNumber: '',
    mayaNumber: '',
    paypalNumber: '',
    firstname: '',
    lastname: '',
    address: '',
    postal: '',
    city: '',
    phone: ''
});

// Method to update payment method and show corresponding section
function updatePaymentMethod(method) {
    formData.value.paymentMethod = method;
}

// Function to submit form data
async function submitForm() {
    try {
        const response = await fetch('/weborders/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData.value)
        });
        if (response.ok) {
            console.log('Order successfully placed!');
            // Redirect or show success message here
        } else {
            console.error('Failed to submit order:', response.statusText);
            // Handle error
        }
    } catch (error) {
        console.error('Error submitting order:', error.message);
        // Handle error
    }
}
</script>


<template>
    <div class="relative content-center mx-10 select-none">
        <div class="grid grid-cols-2 gap-5">

            <!--FormGroup-->
            <form @submit.prevent="submitForm">
    <div class="relative ml-[250px] p-10">
      <label class="text-xl font-semibold">Contact</label>
      <input type="text" v-model="formData.email" placeholder="Email" class="w-full" />
      <label class="text-xl font-semibold">Payment</label>

      <!-- Radio Button for Bank Deposit -->
      <div class="border rounded-t-lg pt-2 bg-inherit">
                    <div class="flex items-center mb-4  px-4">
                        <input id="default-radio-1" type="radio" name="payment-method" value="bank-deposit"
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
    @change="updatePaymentMethod('bank-deposit')"
>
                        <label for="default-radio-1" class="ml-2 text-lg font-medium text-gray-900">Bank Deposit</label>
                    </div>
                    <div id="bank-details" class="hidden bg-[#f5f5f5] items-center w-full border-t-2 pl-52 pb-2">
                        <label>BPI</label>
                        <label>Elijah Theodore Yabut</label>
                        <label>Account number - XXXX-XXXX-XXXX</label>
                        <label>Sea Bank</label>
                        <label>Elijah Theodore Yabut</label>
                        <label>Account number - XXXX-XXXX-XXXX</label>
                    </div>
                </div>

                <!-- Radio Button for Online Payment -->
                <div class="border rounded-b-lg pt-2 mb-6 bg-inherit">
                    <div class="flex items-center mb-4 px-4 ">
                        <input id="default-radio-2" type="radio" name="payment-method" value="online-payment"
    class="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
    @change="updatePaymentMethod('online-payment')"
>

                        <label for="default-radio-2" class="ml-2 text-lg font-medium text-gray-900">Online
                            Payment</label>
                    </div>
                    <div id="online-details" class="hidden bg-[#f5f5f5] items-center w-full pl-52 border-t-2 pb-2">
                        <label>Gcash</label>
                        <label>Number: 09666517365</label>
                        <label>MAYA</label>
                        <label>Number: 09666517365</label>
                        <label>Paypal</label>
                        <label>Number: 09666517365</label>
                    </div>
                </div>


      <label class="text-xl font-semibold">Billing Address</label><br>
      <input type="text" v-model="formData.firstname" placeholder="First Name" class="w-1/2" />
      <input type="text" v-model="formData.lastname" placeholder="Last Name" class="w-1/2" />
      <input type="text" v-model="formData.address" placeholder="Address" class="w-full" />
      <input type="text" v-model="formData.postal" placeholder="Postal Code" class="w-1/2" />
      <input type="text" v-model="formData.city" placeholder="City" class="w-1/2" />
      <input type="number" v-model="formData.phone" placeholder="Phone" class="w-full" />
      
      <router-link to="/complete">
        <button type="submit" class="w-full rounded-md text-white h-12 bg-blue-500 mt-2">Complete Order</button>
      </router-link>
    </div>
  </form>
<!--Product side-->

            <div class="relative bg-[#f5f5f5] p-10 border-l-2 border-gray-200">
                <div v-for="(product, index) in products" :key="index" class="product flex mb-10">
                    <div id="prodImg">
                        <img class="rounded-2xl max-w-40 " :src="product.product_image" alt="Product Image" />
                    </div>
                    <div id="prodInfo" class="mt-14">
                        
                        <div class="ml-16 space-x-16 grid grid-col-6 gap-4  ">
                            <div class="col-start-1">
                            <p class="font-bold text-lg pb-1">
                                {{ product.category }} {{ product.name }}
                            </p>
                        </div>
                        <div class=" col-start-2">
                            <h5 class="text-lg pb-3 text-end">₱{{ product.price }}</h5>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="inline-flex pt-4 border-t-2 border-gray-200 mt-6 text-end">
                    <p class="text-xl mr-[410px] font-semibold">Total: </p>
                    <p class="text-lg font-bold">₱{{ total }}</p>
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

export default {
  data() {
    return {
      formData: {
        email: '',
        paymentMethod: '',
        bankAccountName: '',
        bankAccountNumber: '',
        bankName: '',
        gcashNumber: '',
        mayaNumber: '',
        paypalNumber: '',
        firstname: '',
        lastname: '',
        address: '',
        postal: '',
        city: '',
        phone: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
    }
  }
}
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

select {
    user-select: none;
}
</style>