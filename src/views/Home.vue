<template>
  <v-container fluid id="start">
    <!-- <Chatbot /> -->
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
    <Playground />
  </v-container>
</template>

<script>
import Intro from "@/components/Intro";
import Blog from "@/views/Blog.vue";
import Playground from "@/views/Playground.vue";
export default {
  components: {
    Chatbot: () => import("@/views/Chatbot"),
    References: () => import("@/components/References"),
    CV: () => import("@/components/CV"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    Blog,
    Intro,
    Playground,
  },
};
</script>
