import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/index.css";
import { vAnimate } from "./directives/scrollAnimation";
import i18n from "./i18n";

const app = createApp(App);
app.use(router);
app.use(i18n);
app.directive("animate", vAnimate);

// Global provides for pages
app.config.globalProperties.$apiUrl = import.meta.env.VITE_API_URL as string;
app.config.globalProperties.$mstoreUrl = import.meta.env.VITE_MSTORE_URL as string;

app.mount("#app");
