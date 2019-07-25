<template>
  <div style="border-style: dotted dashed solid double;">
    <v-navigation-drawer 
      id="appDrawer"
      width="170"
      app
      bottom
      dark 
      v-model="drawer"
      class="accent darken-4"
    >
      <v-toolbar flat transparent color="accent">
        <v-list class="pa-0">
          <v-list-tile>
            <v-list-tile-avatar>
              <img src="@/assets/pics/me-thumb.jpg" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Veit Wehner</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <template v-for="(item) in menus">
          <v-list-tile
            :to="{path: item.target}"
            ripple="ripple"
            :key="item.name"
            @click.stop="drawer = false"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title class="menu-item subheading">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
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
    mini: true,
    drawer: null,
    scrollSettings: {
      maxScrollbarLength: 160
    },
    menus: [
      {
        title: "Home",
        target: "/",
        icon: "dashboard"
      },
      {
        title: "CV",
        target: "/home#cv",
        icon: "person_outline"
      },
      {
        title: "Skills",
        target: "/home#skills",
        icon: "center_focus_strong"
      },
      {
        title: "Badges",
        target: "/home#badges",
        icon: "monetization_on"
      },
      {
        title: "References",
        target: "/home#references",
        icon: "grade"
      },
      {
        title: "Blog",
        target: "blog",
        icon: "favorite_border"
      }
    ],
  })
};
</script>

<style scoped>
</style>