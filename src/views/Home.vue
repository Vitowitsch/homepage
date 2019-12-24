<template>
  <v-container fluid id="start">
    <Intro style="border: 1px solid black;" />
    <SkillTree style="border: 1px solid black;" />
    <References style="border: 1px solid black;" />
    <Certs style="border: 1px solid black;" />
    <CV style="border: 1px solid black;"/>
  </v-container>
</template>

<script>
import Intro from "@/components/Intro";
//import Imagebar from "@/components/Imagebar";
//import Bar3D from "@/components/Bar3D";
export default {
  components: {
    References: () => import("@/components/References"),
    CV: () => import("@/components/CV"),
    contact: () => import("@/components/Contact"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    Intro,
    //Imagebar,
  //  Bar3D
  }
};
</script>

