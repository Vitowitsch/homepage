<template>
  <v-container fluid>
    <Intro class="primary"/>
    <div id="start"></div>
    <v-flex xs12>
      <Carbon/>
    </v-flex>
    <hr>
    <v-flex xs12>
      <Cognac/>
    </v-flex>
    <hr>
    <v-flex xs12>
      <CityToll/>
    </v-flex>
    <SkillTree/>
    <References class="secondary"/>
    <Certs/>
    <CV class="secondary"/>
    <contact/>
  </v-container>
</template>

<script>
import Carbon from "@/components/projects/Carbon";
import CityToll from "@/components/projects/CityToll";
import Cognac from "@/components/projects/Cognac";
import Intro from "@/components/Intro";
export default {
  components: {
    References: () => import("@/components/References"),
    CV: () => import("@/components/CV"),
    contact: () => import("@/components/Contact"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    Carbon,
    CityToll,
    Cognac,
    Intro
  }
};
</script>
