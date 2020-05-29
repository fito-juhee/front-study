import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import Home from "../views/Home.vue";
import FlexBox from "../views/layout/FlexBox.vue";

import Cards from "../views/components/Cards.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/layout/flexBox",
    name: "flexBox",
    component: FlexBox
  },
  {
    path: "/components/card",
    name: "card",
    component: Cards
  },
  {
    path: "*",
    name: "notFound",
    redirect: { name: "home" }
  }
];

// Create a new router
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
