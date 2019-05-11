import Vue from "vue";
import { RouterOptions, RouteConfig } from "vue-router";
import Router from "vue-router";

Vue.use(Router);


var scrollBehavior = function(to, from, savedPosition) {
  if (to.hash) {
    return {
      selector :  <any>window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' })
    }
  } else {
    return {
      x: 0,
      y: 0
    }
  }
};

const router = new Router({
  mode: "history",
  scrollBehavior: scrollBehavior
});

export default router;
