<template>
  <v-container fluid id="start">
    <Intro />
    <hr />
    <Blog />
    <hr />
    <CV />
    <hr />
    <References />
    <hr />
    <Certs />
    <hr />
    <SkillTree />
  </v-container>
</template>

<script>
import Intro from "@/components/Intro";
import Blog from "@/views/Blog.vue";
export default {
  components: {
    References: () => import("@/components/References"),
    CV: () => import("@/components/CV"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    Blog,
    Intro
  }
};
</script>

