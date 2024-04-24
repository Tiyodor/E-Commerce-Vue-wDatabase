<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const products = ref([]);
const total = ref(0);
const route = useRoute();
const router = useRouter();

// Fetch product data whenever route changes
watch(() => route.params.ids, async (newIds) => {
    await fetchProductData(newIds);
});

onMounted(async () => {
    // Fetch product data when component is mounted
    await fetchProductData(route.params.ids);
});

async function fetchProductData(ids) {
    console.log('Fetching product data for IDs:', ids);
    try {
        const response = await fetch(`http://localhost:8000/api/products/checkout/${ids}`);
        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        console.log('Received product data:', data);
        
        // Update products variable
        products.value = data;

        // Recalculate total
        calculateTotal();
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

function calculateTotal() {
    total.value = products.value.reduce((acc, product) => acc + parseFloat(product.price), 0);
}

const formData = ref({
    email: '',
    payment: '',
    fname: '',
    lname: '',
    address: '',
    postal: '',
    city: '',
    phone: '',
    products: [], // Array to hold product IDs
    total: 0, // Total price
});

function submitForm() {
    // Set the payment method in formData
    formData.value.payment = document.querySelector('input[name="payment"]:checked').value;

    // Check if products and total are defined
    if (products.value && total.value !== undefined) {
        // Set product IDs and totals
        formData.value.products = products.value.map(product => product.id);
        formData.value.total = total.value;

        // Log the form data (for testing)
        console.log('Form submitted:', formData.value);

        // Send form data to the server
        fetch('http://localhost:8000/api/checkout', {
            method: 'POST',
            body: JSON.stringify(formData.value),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // data.checkout_id
            router.push({ 
                path: '/order/success/' + data.checkout_id,
            });

            // console.log(data); // Log the response from the server (for testing)
            // Optionally, you can handle success response here (e.g., show a success message)
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            // Optionally, you can handle error response here (e.g., show an error message)
        });
    } else {
        console.error('Products or total are not yet defined.');
    }
}
</script>

<template>
    <div class="relative content-center md:mx-10 select-none">
        <form @submit.prevent="submitForm">

            <div class="grid md:grid-cols-2 md:gap-5">

                <!-- FormGroup -->
                <div class="relative md:ml-[250px] p-10">
                    <label class="text-xl font-semibold">Contact</label>
                    <input type="text" v-model="formData.email" placeholder="Email" class="md:w-full" />

                    <label class="text-xl font-semibold">Payment</label>
                    <!-- Radio Button for Bank Deposit -->
                    <div class="border rounded-t-lg md:pt-2 bg-inherit">
                        <div class="flex items-center mb-4 px-4">
                            <input id="default-radio-1" type="radio" name="payment" value="bank"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600">
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
                    <div class="border rounded-b-lg md:pt-2 mb-6 bg-inherit">
                        <div class="flex items-center mb-4 px-4 ">
                            <input id="default-radio-2" type="radio" name="payment" value="ewallet"
                                class="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ml-2 text-lg font-medium text-gray-900">Online Payment</label>
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
                    <input type="text" v-model="formData.fname" placeholder="First Name" class="md:w-1/2" />
                    <input type="text" v-model="formData.lname" placeholder="Last Name" class="md:w-1/2" />
                    <input type="text" v-model="formData.address" placeholder="Address" class="md:w-full" />
                    <input type="number" v-model="formData.postal" placeholder="Postal Code" 
                    maxlength="4" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" class="md:w-1/2" />
                    <input type="text" v-model="formData.city" placeholder="City" class="md:w-1/2" />
                    <input type="phone" v-model="formData.phone" placeholder="Phone" maxlength="11" size="11" class="md:w-full" />
                    
                    <button type="submit" class="md:w-full rounded-md text-white h-12 bg-blue-500 mt-2">Complete Order</button>

                </div>

                <!-- Product side -->
                <div class="relative bg-[#f5f5f5] items-center md:p-10 border-l-2 border-gray-200">
                    <div v-for="(product, index) in products" :key="index" class="product flex mb-10">
                        <div id="prodImg">
                            <img class="rounded-2xl max-w-40 " :src="product.product_image" alt="Product Image" />
                        </div>
                        <div id="prodInfo" class="mt-14">
                            <div class="ml-16 flex md:space-x-36 md:grid md:grid-col-6 md:gap-4">
                                <div class="col-start-1">
                                    <p class="font-bold text-lg pb-1">{{ product.category }} {{ product.name }}</p>
                                </div>
                                <div class="col-start-2">
                                    <h5 class="text-lg md:pb-3 text-end">₱{{ product.price }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:inline-flex pt-4 border-t-2 border-gray-200 mt-6 text-end">
                        <p class="text-xl md:mr-[410px] font-semibold">Total: </p>
                        <p class="text-lg font-bold">₱{{ total }}</p>
                    </div>
                </div>

            </div>
        </form>
    </div>
</template>

<style scoped>
input[type=text],
input[type=number],
input[type=phone],
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
