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
      <v-img :src="currentImage" max-height="100vh" />
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  { url: 'src/assets/certs/ai-hack1.jpg', alt: 'Image 1' },
  { url: '/assets/certs/ai-hack1.jpg', alt: 'Image 2' },
  { url: '@/assets/certs/ai-hack1.jpg', alt: 'Image 3' },
  // Fügen Sie weitere Bilder nach Bedarf hinzu
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
