<template>
  <main>
    <v-container fluid>
      <Intro style="border: 1px solid black;" />
      <div id="start"></div>
      <SkillTree style="border: 1px solid black;" />
      <References style="border: 1px solid black;" />
      <Certs style="border: 1px solid black;" />
      <CV style="border: 1px solid black;" />
      <p></p>
      <v-card style="border: 1px solid black;">
        <center style="font-size:18px;">
          For more about my recent projects please refer to the
          <!-- <router-link :to="l.target"> -->
          <v-btn to="/blog">
            blog
            <!-- <v-icon right dark>edit</v-icon> -->
          </v-btn>section with the menu.
        </center>
      </v-card>
      <!-- </router-link> -->
    </v-container>
  </main>
</template>

<script>
import Intro from "@/components/Intro";
export default {
  components: {
    References: () => import("@/components/References"),
    CV: () => import("@/components/CV"),
    contact: () => import("@/components/Contact"),
    Certs: () => import("@/components/Certs"),
    SkillTree: () => import("@/components/SkillTree"),
    Intro
  }
};
</script>

