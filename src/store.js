// src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: [],
    selectedProduct: null,
    showSidebar: false, // Add this variable
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push(product);
      state.showSidebar = true; // Assuming you have a variable to control the visibility of the sidebar
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
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
    cartItems(state) {
      return state.cartItems;
    },
    cartTotal(state) {
      return state.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
});
