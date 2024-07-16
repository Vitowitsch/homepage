import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import CV from "@/components/CV.vue";
import References from "@/components/References.vue";
import Certs from "@/components/Certs.vue";
import Blog from "@/components/Blog.vue";
import CityToll from "@/components/blog/CityToll.vue";
import Cognac from "@/components/blog/Cognac.vue";
import Consensus from "@/components/blog/Consensus.vue";
import RailRadar from "@/components/blog/RailRadar.vue";
import Carbon from "@/components/blog/Carbon.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/cv", name: "cv", component: CV },
  { path: "/references", name: "references", component: References },
  { path: "/certificates", name: "certificates", component: Certs },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
    children: [
      { path: "carbon", name: "carbon", component: Carbon, props: true },
      { path: "citytoll", name: "citytoll", component: CityToll , props: true},
      { path: "consensus", name: "consensus", component: Consensus, props: true },
      { path: "railradar", name: "railradar", component: RailRadar, props: true },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
