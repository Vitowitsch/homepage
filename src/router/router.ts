// import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
// import { RouterOptions, RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import CV from "@/components/CV.vue";
import References from "@/components/References.vue";
import Certs from "@/components/Certs.vue";
// import CityToll from "@/views/blog/CityToll.vue";
// import Cognac from "@/views/blog/Cognac.vue";
// import Carbon from "@/views/blog/Carbon.vue";
// import Consensus from "@/views/blog/Consensus.vue";
// import RailRadar from "@/views/blog/RailRadar.vue";


// import Chatbot from "@/views/Chatbot.vue";


const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/cv", name: "cv", component: CV },
  { path: "/references", name: "references", component: References },
  { path: "/certificates", name: "certificates", component: Certs },
  // {
  //   path: "/blog/consensus",
  //   name: "consensus",
  //   component: Consensus,
  //   props: true,
  // },
  // {
  //   path: "/blog/railradar",
  //   name: "railradar",
  //   component: RailRadar,
  //   props: true,
  // },
  // {
  //   path: "/blog/carbon",
  //   name: "carbon",
  //   component: Carbon,
  //   props: true,
  // },
  // {
  //   path: "/blog/cognac",
  //   name: "cognac",
  //   component: Cognac,
  //   props: true,
  // },
  // {
  //   path: "/blog/citytoll",
  //   name: "citytoll",
  //   component: CityToll,
  //   props: true,
  // },
  // {
  //   path: "/badges",
  //   name: "badges",
  //   component: Certs,
  //   props: true,
  // },
  // {
  //   path: "/chatbot",
  //   name: "chatbot",
  //   component: Chatbot,
  //   props: true,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// const router = new Router({
//   // mode: "hash",
//   scrollBehavior: scrollBehavior,
//   linkActiveClass: "active",

// });

export default router;
