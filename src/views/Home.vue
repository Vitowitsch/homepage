<template>
  <main>
    <v-container fluid>
      <!-- <Intro class="primary"/>
      <div id="start"></div>
      <Carbon/>
      <Cognac/>
      <CityToll/>
      <SkillTree/>
      <References class="secondary"/>
      <Certs/>
      <CV class="secondary"/> -->
      <Blog/>
    </v-container>
  </main>
</template>

<script>
import Carbon from "@/components/projects/Carbon";
import CityToll from "@/components/projects/CityToll";
import Cognac from "@/components/projects/Cognac";
import Intro from "@/components/Intro";
import Blog from "@/components/blog/Blog";
import ClimateGlobe from "@/components/projects/ClimateGlobe";
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
    Intro,
    ClimateGlobe,
    Blog
  }
};
</script>
