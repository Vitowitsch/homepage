<template>
  <div id="recent-projects">
    <Carbon class="primary"/>
    <hr>
    <Cognac/>
    <hr>
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
