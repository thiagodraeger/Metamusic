import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Blank.vue"),
    meta: {
      auth: false,
    },
    children: [
      {
        path: "/",
        name: "Login",
        component: Login,
      },
      {
        path: "/cadastro",
        name: "Cadastro",
        component: () => import("../views/Cadastro.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "/perfil",
        name: "Perfil",
        component: () => import("../views/Perfil.vue"),
      },
      {
        path: "/bandas",
        name: "Bandas",
        component: () => import("@/views/Bandas.vue"),
      },
      {
        path: "/banda/:id",
        name: "BandaDetail",
        component: () => import("@/views/Banda_Base.vue"),
      },
      {
        path: "/artistas",
        name: "Artistas",
        component: () => import("@/views/Artistas.vue"),
      },
      {
        path: "/artista/:id",
        name: "ArtistaDetail",
        component: () => import("@/views/Artista_Base.vue"),
      },
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/noticias/:id",
        name: "NoticiaDetail",
        component: () => import("@/views/noticia.vue"),
      },
      {
        path: "/albums/:id",
        name: "AlbumDetail",
        component: () => import("@/views/Album.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (!store.state.auth.loggedIn) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
