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
    <SkillTree />
    <hr />
    <Certs />
  </v-container>
</template>

<script>
import Intro from "@/components/Intro";
import Blog from "@/views/Blog.vue";
//import Imagebar from "@/components/Imagebar";
//import Bar3D from "@/components/Bar3D";
export default {
  components: {
    References: () => import("@/components/References"),
    CV: () => import("@/components/CV"),
    contact: () => import("@/components/Contact"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    Blog,
    Intro
    //Imagebar,
    //  Bar3D
  }
};
</script>

