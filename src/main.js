import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css"; //primeflex

//createApp(App).use(router, PrimeVue).mount("#app");
const app = createApp(App).use(router);

app.use(PrimeVue);

app.component("ButtonPrime", Button);
app.component("CardPrime", Card);
// app.use(router);
app.mount('#app');