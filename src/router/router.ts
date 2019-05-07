import Vue from "vue";
import { RouterOptions, RouteConfig } from "vue-router";
import RecentProjects from "@/components/RecentProjects.vue";
import SkillTree from "@/components/SkillTree.vue";
import CV from "@/components/CV.vue";
import Contact from "@/components/Contact.vue";
import Main from "@/views/Main.vue";

import Router from "vue-router";

Vue.use(Router);

const navRoutes = <Array<RouteConfig>>[
  { name: "main", path: "/", component: Main },
  { name: "projects", path: "/recent-projects", component: RecentProjects },
  { name: "cv", path: "/cv", component: CV },
  { name: "skills", path: "/skills", component: SkillTree },
  { name: "contact", path: "/contact", component: Contact }
];

var scrollBehavior = function(to, from, savedPosition) {
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
  mode: "history",
  scrollBehavior: scrollBehavior,
  routes: navRoutes
});

export default router;
