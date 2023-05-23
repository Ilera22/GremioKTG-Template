import { createApp } from "vue";
import App from "./App.vue";
import { EventBus } from "./components/EventBus.js";
import router from "./router.js"; // Importa el archivo de configuración de Vue Router

const app = createApp(App);
app.config.globalProperties.$bus = EventBus; // Agrega el EventBus a las propiedades globales

app.use(router); // Usa el router en la aplicación

app.mount("#app");
