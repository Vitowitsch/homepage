<template>
  <v-container>
    <!-- <welcome/> -->
    <EchartsTest/>
    <!-- <CV/> -->
    <!-- <Skills/> -->
    <!-- <recent-projects/>
    <services/>-->
    <!-- <get-in-touch/> -->
  </v-container>
</template>

<script>
export default {
  components: {
    EchartsTest: () => import("@/components/EchartsTest"),
    CV: () => import("@/components/CV"),
    Skills: () => import("@/components/Skills"),
    GetInTouch: () => import("@/components/GetInTouch"),
    RecentProjects: () => import("@/components/RecentProjects"),
    Services: () => import("@/components/Services"),
    Welcome: () => import("@/components/Welcome")
  }
};
</script>
