import Vue from "vue";
import { RouterOptions, RouteConfig } from "vue-router";
import Router from "vue-router";
import Blog from "@/views/Blog.vue";
import Home from "@/views/Home.vue";

Vue.use(Router);

var scrollBehavior = function(to, from, savedPosition) {
  console.log(to.hash);
  if (to.hash !== '#blog') {
    return {
      selector: <any>(
        window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: "smooth"
        })
      )
    };
  } else {
    return {
      x: 0,
      y: 0
    };
  }
};

const router = new Router({
  mode: "history",
  scrollBehavior: scrollBehavior,
  linkActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/blog", name: "blog", component: Blog },
    // {
    //   path: "/",
    //   name: "feed",
    //   component: Blog
    // },
    // {
    //   path: "/read/:post",
    //   name: "post",
    //   props: true,
    //   component: Blog
    // }
  ]
});

export default router;
