// src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    selectedProduct: null,
    showSidebar: false,
  },
  mutations: {
    addToCart(state, product) {
      state.products.push(product);
      state.showSidebar = true;
      // Update localStorage
      localStorage.setItem('productData', JSON.stringify(state.products));
    },
    removeFromCart(state, index) {
      state.products.splice(index, 1);
      // Update localStorage
      localStorage.setItem('productData', JSON.stringify(state.products));
    },
    // Add mutation to initialize products from localStorage
    initializeCart(state) {
      const productData = localStorage.getItem('productData');
      if (productData) {
        state.products = JSON.parse(productData);
      }
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
  },
  actions: {
    // Define actions if needed
  },
  getters: {
    selectedProduct(state) {
      return state.selectedProduct;
    },
    products(state) {
      return state.products;
    },
    cartTotal(state) {
      return state.products.reduce((total, item) => total + item.price, 0);
    },
  },
  // Call initializeCart mutation when the store is created
  plugins: [store => {
    store.commit('initializeCart');
  }]
});
