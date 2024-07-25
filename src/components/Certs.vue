<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-hover v-slot:default="{ isHovering }">
          <v-card
            @click="showImage(image.url)"
            :elevation="isHovering ? 12 : 2"
            class="d-flex align-center justify-center"
            style="cursor: pointer; height: 200px;"
          >
         
            <v-img :src="image.url" :alt="image.alt" class="image" />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <v-img :src="currentImage" max-height="100vh" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  { url: new URL('@/assets/certs/ai-hack1.jpg', import.meta.url).href, alt: 'AI Hackathon 1' },
  { url: new URL('@/assets/certs/intrapreneurs.jpg', import.meta.url).href, alt: 'Intrapreneurs' },
  { url: new URL('@/assets/certs/sie_swa_curriculum.jpg', import.meta.url).href, alt: 'Siemens SWA Curriculum' },
  { url: new URL('@/assets/certs/futureland.png', import.meta.url).href, alt: 'Futureland' },
  { url: new URL('@/assets/certs/neo.png', import.meta.url).href, alt: 'NEO' },
  { url: new URL('@/assets/certs/mindsphere_hack.png', import.meta.url).href, alt: 'Mindsphere Hack' },
  { url: new URL('@/assets/certs/swa_cert.jpg', import.meta.url).href, alt: 'SWA Certificate' },
  { url: new URL('@/assets/certs/inference_modeling.png', import.meta.url).href, alt: 'Inference Modeling' },
  { url: new URL('@/assets/certs/statistical_learning.png', import.meta.url).href, alt: 'Statistical Learning' },
])

const dialog = ref(false)
const currentImage = ref('')

const showImage = (url) => {
  currentImage.value = url
  dialog.value = true
}
</script>

<style scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
