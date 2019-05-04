<template>
  <div>
    <Carbon class="secondary"/>
    <CityToll class="primary"></CityToll>
  </div>
</template>

<script>
import Carbon from "@/components/Carbon";
import CityToll from "@/components/CityToll";
export default {
  components: {
    Carbon,
    CityToll
  },
  data: () => ({
    length: 3,
    window: 0,
    comps: ["Carbon"]
  })
};
</script>
