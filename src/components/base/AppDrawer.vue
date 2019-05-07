<template>
  <div style="border-style: dotted dashed solid double;">
    <v-navigation-drawer id="appDrawer" app v-model="drawer">
      <v-toolbar>
        <v-toolbar-title class="ml-0 pl-3">
          <span class="hidden-sm-and-down">Veit Wehner's Place</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-list dense expand style="margin-top:30px;">
        <template v-for="(item) in menus">
          <v-list-tile :to="{hash: item.target}" ripple="ripple" :key="item.name">
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title class="menu-item headline">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import menu from "@/api/menu";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "app-drawer",
  components: {
    VuePerfectScrollbar
  },
  created() {
    window.getApp.$on("APP_DRAWER_TOGGLED", () => {
      this.drawer = !this.drawer;
    });
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    mini: false,
    drawer: false,
    scrollSettings: {
      maxScrollbarLength: 160
    },
    menus: [
      {
        title: "Homepage",
        name: "main",
        component: "Main",
        path: "/",
        target: "",
        icon: "dashboard"
      },
      {
        title: "Projects",
        name: "projects",
        component: "RecentProjects",
        path: "/carbon",
        target: "recent-projects",
        icon: "format_align_left"
      },
      {
        title: "CV",
        name: "cv",
        component: "CV",
        target: "cv",
        path: "/cv",
        icon: "person_outline"
      },
      {
        title: "Skills",
        name: "skills",
        component: "SkillBar",
        target: "skills",
        path: "skills",
        icon: "star_half"
      },
      {
        title: "Contact",
        name: "contact",
        component: "Contact",
        target: "contact",
        path: "contact",
        icon: "contact_mail"
      }
    ]
  })
};
</script>

<style scoped>
</style>