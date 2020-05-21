import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
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
