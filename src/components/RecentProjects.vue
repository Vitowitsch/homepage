<template>
  <v-container>
    <v-layout mb-5>
      <CityToll></CityToll>
    </v-layout>
    <hr>
    <v-layout mt-5>
      <Carbon></Carbon>
    </v-layout>
  </v-container>
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
