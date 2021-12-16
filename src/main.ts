import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";
import 'amfe-flexible'

import { Button } from 'vant';



const app = createApp(App)
app.use(router)
app.use(store)
app.use(Button)
app.mount("#app")





