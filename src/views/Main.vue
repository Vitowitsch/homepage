<template>
  <div>
    <recent-projects class="secondary"/>
    <hr>
    <CV/>
    <hr>
    <SkillTree class="secondary"/>
    <hr>
    <Certs/>
    <hr>
    <contact class="secondary"/>
  </div>
</template>

<script>
export default {
  components: {
    CV: () => import("@/components/CV"),
    contact: () => import("@/components/Contact"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    RecentProjects: () => import("@/components/RecentProjects")
  }
};
</script>
