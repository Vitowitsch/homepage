<template>
  <v-container fluid>
    <hr>
    <v-carousel interval="99999999999">
      <v-carousel-item v-for="p in projects" :key="p.title">
        <v-img :src="require(`@/assets/certs/${p}`)" aspect-ratio="3.0" contain/>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ],
    projects: ["ai-hack1.jpg", "intrapreneurs.jpg", "futureland.png", "neo.png"]
  })
};
</script>
