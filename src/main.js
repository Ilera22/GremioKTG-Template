import { createApp } from "vue";
import App from "./App.vue";
import { EventBus } from "./components/EventBus.js";

const app = createApp(App);
app.config.globalProperties.$bus = EventBus;

app.mount("#app");
