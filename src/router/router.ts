import Vue from "vue";
import { RouterOptions, RouteConfig } from "vue-router";
import Router from "vue-router";
import Blog from "@/views/Blog.vue";
import Projects from "@/views/Projects.vue";
import Home from "@/views/Home.vue";

Vue.use(Router);

var scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;

      // specify offset of the element
      if (to.hash === "#anchor2") {
        position.offset = { y: 100 };
      }

      if (document.querySelector(to.hash)) {
        return {
          selector: <any>window.scrollTo({
            top: document.querySelector(to.hash).offsetTop,
            behavior: "smooth"
          })
        };
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
        position.x = 0;
        position.y = 0;
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
  scrollBehavior: scrollBehavior,
  linkActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: Home, meta: { scrollToTop: true } },
    { path: "/home", name: "home", component: Home },
    { path: "/blog", name: "feed", component: Blog },
    { path: "/blog", name: "/by/:author", component: Blog },
    { path: "/blog", name: "post", component: Blog, props: true },
    { path: "/projects", name: "projects", component: Projects },
    {
      path: "/",
      name: "feed",
      component: Blog
    },
    {
      path: "/by/:author",
      name: "author",
      props: true,
      component: Blog
    },
    {
      path: "/read/:post",
      name: "post",
      props: true,
      component: Blog
    }
  ]
});

export default router;
