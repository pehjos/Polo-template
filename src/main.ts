import { createApp } from 'vue'
import router from "./router";
import PrimeVue from "primevue/config";
import store from "./store";
import './style.css'
import './index.css'
import App from './App.vue'




const app = createApp(App);
app
    .use(router)
    .use(store)
    .use(PrimeVue)
    .mount("#app");
