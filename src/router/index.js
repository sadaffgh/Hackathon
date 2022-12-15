import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GamesView from "../views/GamesView.vue";
import AnimationsView from "../views/AnimationsView.vue";
import CommingSoon from "../components/ComingSoon.vue"


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/animations",
    name: "Animations",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    component: AnimationsView,
  },
  {
    path: "/games",
    name: "Games",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GamesView,
  },
  {
    path: "/wip",
    name: "CommingSoon",
    component: CommingSoon,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
