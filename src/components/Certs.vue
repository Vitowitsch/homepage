<template>
  <div id="badges">
    <project-headline>
      <template v-slot:header>Badges</template>
      Certificates
    </project-headline>
    <v-layout justify-space-between>
      <v-container grid-list-sm fluid>
        <v-layout wrap>
          <v-flex v-for="p in projects" :key="p.url" xs4 d-flex>
            <v-card flat tile class="d-flex">
              <center>
                <expandable-image class="image" :src="p.url"></expandable-image>
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-layout>
                </template>
              </center>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import Vue from "vue";
import VueExpandableImage from "vue-expandable-image";
Vue.use(VueExpandableImage);
export default {
  data: () => ({
    selectedImage: null,
    projects: [
      { url: require("@/assets/certs/ai-hack1.jpg") },
      { url: require("@/assets/certs/intrapreneurs.jpg") },
      { url: require("@/assets/certs/siemens_swa_curriculum.jpeg") },
      { url: require("@/assets/certs/futureland.png") },
      { url: require("@/assets/certs/neo.png") },
      { url: require("@/assets/certs/mindsphere_hack.png") },
      { url: require("@/assets/certs/swa_cert.jpg") },
      { url: require("@/assets/certs/inference_modeling.png") },
	  { url: require("@/assets/certs/statistical_learning.png") }
    ],
  }),
  methods: {
    zoom(url) {
      console.log("Zoom", url);
      this.selectedImage = url;
    },
  },
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
