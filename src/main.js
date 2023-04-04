import { createApp } from "vue";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $bus from './utils/Events';


const app = createApp(App);

app.config.globalProperties.$bus = $bus;

app.mount('#app');