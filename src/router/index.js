import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GamesView from "../views/GamesView.vue";
import AnimationsView from "../views/AnimationsView.vue";
import AnimationComingSoon from "../views/AnimationComingSoon.vue";
import Page1 from "../views/say-no-to-plastic/Page1.vue"
import Page2 from "../views/say-no-to-plastic/Page2.vue";
import Page3 from "../views/say-no-to-plastic/Page3.vue";

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
    component: AnimationComingSoon,
  },
  {
    path: "/say-no-to-plastic/1",
    name: "say-no-to-plastic1",
    component: Page1,
  },
  {
    path: "/say-no-to-plastic/2",
    name: "say-no-to-plastic2",
    component: Page2,
  },
  {
    path: "/say-no-to-plastic/3",
    name: "say-no-to-plastic3",
    component: Page3,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
