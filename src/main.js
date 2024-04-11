import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './routes/router';

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
app.mount('#app');
