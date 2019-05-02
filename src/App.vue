<template>
  <v-app>
    <v-card color="basil">
      <v-card-title class="text-xs-center justify-center py-4">
        <h1 class="font-weight-bold display-3 basil--text">BASiL</h1>
      </v-card-title>
      <v-tabs v-model="tab" color="basil" grow>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card flat color="basil">
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <!-- <v-toolbar color="cyan" dark tabs>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Veit Wehner's Place</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs v-model="tab" color="cyan" grow>
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
    <core-view/> -->
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
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
