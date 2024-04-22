import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './routes/router';
import store from './store'; // Import the Vuex store

const app = createApp(App);

app.mixin({
  data() {
    return {
      message: 'Hello Vue!',
      show: false,
      secondary: false
    };
  }
});

app.use(router);
app.use(store); // Use the Vuex store with the Vue application instance
app.mount('#app');
