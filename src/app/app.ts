import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@src/app/App.vue";
import router from "@src/router";
import "./app.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
