<template>
  <div>
    <ToolBar/>
    <AppDrawer></AppDrawer>
    <v-app>
      <v-content>
        <Intro/>
        <home/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import ToolBar from "@/components/base/ToolBar";
import AppDrawer from "@/components/base/AppDrawer";
import Intro from "@/components/Intro";
import AppEvents from "./event.js";

export default {
  components: {
    home: () => import("@/views/Main"),
    ToolBar,
    AppDrawer,
    Intro
  },
  created() {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },
  data() {
    return {
      tab: null,
      scrollOptions: {
        container: "body",
        duration: 700,
        easing: "ease",
        offset: 0,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      }
    };
  }
};
</script>
<style>
.basil {
  color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
