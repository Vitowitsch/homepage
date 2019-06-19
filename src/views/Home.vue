<template>
  <main>
    <v-container fluid>
      <Intro class="primary"/>
      <div id="start"></div>
      <SkillTree/>
      <References class="secondary"/>
      <Certs/>
      <CV class="secondary"/>
    </v-container>
  </main>
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
