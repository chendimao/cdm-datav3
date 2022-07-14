import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import componentsList from "../package/components";



const app = createApp(App);

componentsList.forEach((com: any) => {
    app.use(com);
})

app.mount('#app');
