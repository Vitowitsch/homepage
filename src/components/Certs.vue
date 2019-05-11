<template>
  <v-container fluid style="height: 100%">
    <project-headline>
      <template v-slot:header>badges</template>
      Badges
    </project-headline>
    <v-layout justify-space-between>
      <v-flex xs12 md3 v-for="p in projects" :key="p">
        <expandable-image class="image" :src="p.url"></expandable-image>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedImage: null,
    projects: [
      { url: require("@/assets/certs/ai-hack1.jpg") },
      { url: require("@/assets/certs/intrapreneurs.jpg") },
      { url: require("@/assets/certs/futureland.png") },
      { url: require("@/assets/certs/neo.png") }
    ]
  }),
  methods: {
    zoom(url) {
      console.log("Zoom", url);
      this.selectedImage = url;
    }
  }
};
</script>
<style>
.image {
  width: 40%;
  max-width: 100%;
}
.expandable-image {
  position: relative;
  transition: 0.25s opacity;
  cursor: zoom-in;
}
</style>
