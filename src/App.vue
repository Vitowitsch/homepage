<template>
  <v-app>
    <v-toolbar  tabs>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Veit Wehner's Place</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs v-model="tab" grow>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <!-- <core-toolbar /> -->
    <core-view/>
    <!-- <core-footer /> -->
  </v-app>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import("@/components/base/Footer"),
    CoreToolbar: () => import("@/components/base/Toolbar"),
    CoreView: () => import("@/views/Main")
  },
  data() {
    return {
      tab: null,
      items: ["about", "skills", "projects", "services", "contact"],
      text: ""
    };
  }
};
</script>
<style>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
