import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// Importa los componentes que deseas utilizar en tus rutas
import Header from "@/components/Header.vue";
import PostList from "@/components/PostList.vue";
import Post from "@/components/Post.vue";

// Crea una instancia de la aplicación de Vue
const app = createApp();

// Configura los componentes y el enrutador
app.component("Header", Header);
app.component("PostList", PostList);
app.component("Post", Post);

// Crea el enrutador
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: PostList },
    { path: "/post/:id", component: Post }
  ]
});

// Adjunta el enrutador a la instancia de la aplicación
app.use(router);

// Monta la aplicación en el elemento con el ID "app"
app.mount("#app");

export default router;
