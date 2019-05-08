<template>
  <v-expansion-panel value="1">
    <v-expansion-panel-content>
      <template v-slot:header>
        <div></div>
      </template>
      <v-card>
        <v-card-text>
          <center>
            <headline-upper-text><% SOFTWARE ARCHITECT / FULL-STACK DEVELOPER %></headline-upper-text>
          </center>
        </v-card-text>
        <v-img :src="require('@/assets/pics/siena.jpg')" aspect-ratio="2.75"></v-img>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>