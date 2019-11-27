import Vue from "vue";
import { RouterOptions, RouteConfig } from "vue-router";
import Router from "vue-router";
import Blog from "@/views/Blog.vue";
import Home from "@/views/Home.vue";

Vue.use(Router);

var scrollBehavior = function(to, from, savedPosition) {
  console.log("entering scrollbehior");
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    console.log("to saved position");
    return savedPosition;
  } else {
    const position = {};

    // scroll to anchor by returning the selector
    if (to.hash) {
      console.log("to hash" + to.hash);
      (position as any).selector = to.hash;

      // specify offset of the element
      
      if (document.querySelector(to.hash)) {
        console.log("jump to anchor..");
        (position as any).selector = to.hash
        return position;
        // return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false;
    }

    return new Promise(resolve => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        (position as any).x = 0;
        (position as any).y = 0;
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once("triggerScroll", () => {
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
        resolve(position);
      });
    });
  }
};


const router = new Router({
  mode: "history",
  scrollBehavior: scrollBehavior,
  linkActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: Home },
    // { path: "/", name: "home", component: Home },
    { path: "/blog", name: "feed", component: Blog },
    { path: "/blog", name: "post", component: Blog, props: true },
    {
      path: "/read/:post",
      name: "post",
      props: true,
      component: Blog
    }
  ]
});

export default router;
