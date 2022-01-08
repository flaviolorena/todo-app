import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

//css
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

//montagem
const app = createApp(App);
app.component("Button", Button);
app.component("InputText", InputText);

app.use(PrimeVue);
app.mount("#app");
