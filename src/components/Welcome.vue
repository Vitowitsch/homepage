<template>
  <v-expansion-panel>
    <section id="welcome">
      <v-expansion-panel-content>
        <template v-slot:header>Hi there</template>
        <v-img :src="require('@/assets/pics/me.jpg')" height="100vh"/>
      </v-expansion-panel-content>
    </section>
  </v-expansion-panel>
</template>
<script>
</script>

