import Vue from "vue";
import { RouterOptions, RouteConfig } from "vue-router";
import Contact from "@/components/Contact.vue";
import Home from "../views/home/Home.vue";
import Router from "vue-router";

Vue.use(Router);

const navRoutes = <Array<RouteConfig>>[
  { name: "home", path: "", component: Home },
];

const router = new Router({
  mode: "hash",
  routes: navRoutes
});

export default router;
