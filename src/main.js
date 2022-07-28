import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store';
import router from '@/helpers/router';
import './styles/app.scss'

createApp(App).use(router).use(store).mount('#app')
