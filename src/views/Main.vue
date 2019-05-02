<template>
  <v-container justify-space-between>
    <!-- <welcome/> -->
    <recent-projects/>
    <Certs/>
    <!-- <EchartsTest/> -->
    <!-- <CV/> -->
    <!-- <Skills/> -->
    <!-- <services/> -->
    <!-- <get-in-touch/> -->
  </v-container>
</template>

<script>
export default {
  components: {
    EchartsTest: () => import("@/components/EchartsTest"),
    CV: () => import("@/components/CV"),
    Certs: () => import("@/components/Certs"),
    Skills: () => import("@/components/Skills"),
    GetInTouch: () => import("@/components/GetInTouch"),
    RecentProjects: () => import("@/components/RecentProjects"),
    Services: () => import("@/components/Services"),
    Welcome: () => import("@/components/Welcome")
  }
};
</script>
