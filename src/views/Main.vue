<template>
  <div>
    <recent-projects class="secondary"/>
    <CV/>
    <SkillTree class="secondary"/>
    <References/>
    <contact class="secondary"/>
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
