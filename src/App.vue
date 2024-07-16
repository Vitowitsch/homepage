<template>
  <v-app>
    <v-app-bar app collapse>
      <v-app-bar-nav-icon color="teal" @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app :width="drawerWidth">
      <v-list nav dense>
        <v-list-item 
          v-for="item in items" 
          :key="item.name" 
          :to="{ name: item.name }"
          link
        >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useDisplay } from 'vuetify';

// Accessing Vuetify's display options to determine breakpoints
const { name } = useDisplay();

const drawer = ref<boolean | null>(null);
const group = ref<string | null>(null);
const tab = ref<string | null>(null);

const items = ref([
  { name: 'home', text: 'HOME', icon: 'dashboard'},
  { name: 'cv', text: 'CV', icon: 'person_outline' },
  { name: 'references', text: 'REFERENCES', icon: 'grade' },
  { name: 'certificates', text: 'CERTIFICATES', icon: 'grade' },
  { name: 'blog', text: 'BLOG', icon: 'grade' },
  
]);

const height = computed(() => {
  switch (name.value) {
    case 'xs':
      return '10';
    default:
      return '10';
  }
});

const drawerWidth = computed(() => {
  switch (name.value) {
    case 'xs':
      return 220;
    default:
      return 300;
  }
});

watch(group, () => {
  drawer.value = null;
});

onMounted(() => {
  (window as any).getApp = { drawer, group, tab, items, height, drawerWidth };
});
</script>

<style>
* {
  font-family: Mansalva;
  font-size: medium;
}
</style>
