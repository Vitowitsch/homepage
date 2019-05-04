<template>
  <div>
    <CV secondary/>
    <recent-projects/>
    <!-- <Certs/> -->

    <!-- <Skills/> -->
    <!-- <services/> -->
    <!-- <get-in-touch/> -->
  </div>
</template>

<script>
export default {
  components: {
    CV: () => import("@/components/CV"),
    Certs: () => import("@/components/Certs"),
    Skills: () => import("@/components/Skills"),
    RecentProjects: () => import("@/components/RecentProjects")
  }
};
</script>
