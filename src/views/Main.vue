<template>
  <main>
    <!-- <MapTest></MapTest> -->
    <v-container fluid>
      <!-- <WorldClimateChart></WorldClimateChart> -->
      <!-- <WorldClimate></WorldClimate> -->
      <Intro class="primary"/>
      <div id="start"></div>
      <Carbon/>
      <Cognac/>
      <CityToll/>
      <SkillTree/>
      <References class="secondary"/>
      <Certs/>
      <CV class="secondary"/>
      <contact/>
    </v-container>
  </main>
</template>

<script>
import Carbon from "@/components/projects/Carbon";
import MapTest from "@/components/backup/MapTest";
// import WorldClimate from "@/components/backup/WorldClimate";
// import WorldClimateChart from "@/components/backup/WorldClimateChart";
import CityToll from "@/components/projects/CityToll";
import Cognac from "@/components/projects/Cognac";
import Intro from "@/components/Intro";
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
    MapTest
    // WorldClimate,
    // WorldClimateChart
  }
};
</script>
