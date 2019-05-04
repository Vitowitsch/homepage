import Vue from "vue";
import { RouterOptions, RouteConfig } from "vue-router";
import Carbon from "@/components/Carbon.vue";
import Router from "vue-router";
import VueScrollTo from "vue-scrollto"; // Use VueScrollTo for animation.

Vue.use(Router);

const navRoutes = <Array<RouteConfig>>[
  { name: "carbon", path: "/", component: Carbon },
];

var scrollBehavior = function(to, from, savedPosition) {
  console.log("scrolling..");
  if (to.hash) {
    return {
      selector: to.hash
    }
  } else {
    return {
      x: 0,
      y: 0
    }
  }
};

const router = new Router({
  mode: "hash",
  scrollBehavior: scrollBehavior,
  routes: navRoutes
});

export default router;
