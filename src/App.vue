<template>
  <div>
    <ToolBar/>
    <v-app>
      <v-content>
        <core-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import ToolBar from "@/components/base/ToolBar";
export default {
  components: {
    CoreView: () => import("@/views/Main"),
    ToolBar
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
