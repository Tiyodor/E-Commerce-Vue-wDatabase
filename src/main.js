import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './routes/router';


const app = createApp(App);
app.use(router);
app.mount('#app');
