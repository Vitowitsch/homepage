<template>
  <div>
    <welcome/>
    <AboutMe/>
    <EchartsTest/>

    <CV/>
    <v-spacer></v-spacer>
    <Skills/>
    <recent-projects/>
    <services/>
    <about-me/>
    <get-in-touch/>
  </div>
</template>

<script>
export default {
  components: {
    EchartsTest: () => import("@/components/EchartsTest"),
    AboutMe: () => import("@/components/AboutMe"),
    CV: () => import("@/components/CV"),
    Skills: () => import("@/components/Skills"),
    GetInTouch: () => import("@/components/GetInTouch"),
    RecentProjects: () => import("@/components/RecentProjects"),
    Services: () => import("@/components/Services"),
    Welcome: () => import("@/components/Welcome")
  }
};
</script>
