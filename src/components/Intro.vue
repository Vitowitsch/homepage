<template>
  <v-expansion-panel value="1" inset>
    <v-expansion-panel-content>
      <template v-slot:header>
        <div></div>
      </template>
      <v-card>
             <v-img
          :src="require('@/assets/pics/siena.jpg')"
          aspect-ratio="2.75"
        ></v-img>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>