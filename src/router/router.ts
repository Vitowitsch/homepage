import Vue from "vue";
import { RouterOptions, RouteConfig } from "vue-router";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import CityToll from "@/views/blog/CityToll.vue";
import Cognac from "@/views/blog/Cognac.vue";
import Carbon from "@/views/blog/Carbon.vue";
import Consensus from "@/views/blog/Consensus.vue";
import RailRadar from "@/views/blog/RailRadar.vue";
import References from "@/components/References.vue";
import Certs from "@/components/Certs.vue";
import Chatbot from "@/views/Chatbot.vue";

Vue.use(Router);

var scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};

    // scroll to anchor by returning the selector
    if (to.hash) {
      (position as any).selector = to.hash;

      // specify offset of the element
      if (to.hash === "#anchor2") {
        (position as any).offset = { y: 100 };
      }

      if (document.querySelector(to.hash)) {
        return {
          selector: <any>window.scrollTo({
            top: document.querySelector(to.hash).offsetTop,
            behavior: "smooth",
          }),
        };
        // return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false;
    }

    return new Promise((resolve) => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some((m) => m.meta.scrollToTop)) {
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
  // mode: "hash",
  scrollBehavior: scrollBehavior,
  linkActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/blog/consensus",
      name: "consensus",
      component: Consensus,
      props: true,
    },
    {
      path: "/blog/railradar",
      name: "railradar",
      component: RailRadar,
      props: true,
    },
    {
      path: "/blog/carbon",
      name: "carbon",
      component: Carbon,
      props: true,
    },
    {
      path: "/blog/cognac",
      name: "cognac",
      component: Cognac,
      props: true,
    },
    {
      path: "/blog/citytoll",
      name: "citytoll",
      component: CityToll,
      props: true,
    },
    {
      path: "/references",
      name: "references",
      component: References,
      props: true,
    },
    {
      path: "/badges",
      name: "badges",
      component: Certs,
      props: true,
    },
    {
      path: "/chatbot",
      name: "chatbot",
      component: Chatbot,
      props: true,
    },
  ],
});

export default router;
