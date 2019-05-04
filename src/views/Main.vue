<template>
  <div>
    <SkillTree/>
    <recent-projects/>
    <CV secondary/>
    <Certs/>
  </div>
</template>

<script>
export default {
  components: {
    CV: () => import("@/components/CV"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    RecentProjects: () => import("@/components/RecentProjects")
  }
};
</script>
