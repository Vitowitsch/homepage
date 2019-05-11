<template>
  <div>
    <recent-projects/>
    <CV/>
    <SkillTree/>
    <References/>
    <contact/>
  </div>
</template>

<script>
export default {
  components: {
    References: () => import("@/components/References"),
    CV: () => import("@/components/CV"),
    contact: () => import("@/components/Contact"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    RecentProjects: () => import("@/components/RecentProjects")
  }
};
</script>
