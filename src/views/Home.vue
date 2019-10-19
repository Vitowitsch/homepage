<template>
  <v-container fluid>
    <Intro style="border: 1px solid black;" />
    <div id="start"></div>
    <SkillTree style="border: 1px solid black;" />
    <References style="border: 1px solid black;" />
    <Certs style="border: 1px solid black;" />
    <CV style="border: 1px solid black;" />
  </v-container>
</template>

<script>
import Intro from "@/components/Intro";
export default {
  components: {
    References: () => import("@/components/References"),
    CV: () => import("@/components/CV"),
    contact: () => import("@/components/Contact"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    Intro
  }
};
</script>

