<template>
  <div id="recent-projects">
    <Carbon class="primary"/>
    <Cognac/>
    <CityToll class="primary"/>
  </div>
</template>

<script>
import Carbon from "@/components/projects/Carbon";
import CityToll from "@/components/projects/CityToll";
import Cognac from "@/components/projects/Cognac";
export default {
  components: {
    Carbon,
    CityToll,
    Cognac
  },
  data: () => ({
    length: 3,
    window: 0,
    comps: ["Carbon"]
  })
};
</script>
