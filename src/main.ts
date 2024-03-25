import { createApp } from 'vue'
import App from './App.vue'

// style
import "./assets/style/_index.scss";
import {createPinia} from "pinia";

createApp(App).use(createPinia()).mount('#app')
