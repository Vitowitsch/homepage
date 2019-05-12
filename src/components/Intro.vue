<template>
  <v-card>
    <v-card-text>
      <title-header>
        Veit Wehner
        <template v-slot:header>
          SOFTWARE ARCHITECT
          <br>FULL-STACK DEVELOPER
        </template>
      </title-header>
    </v-card-text>
    <center>
      <v-flex xs10>
        <v-responsive :aspect-ratio="16/9" ml-5 pl-5>
          <v-img :src="require('@/assets/pics/intro.jpg')" aspect-ratio="3.0"></v-img>
          <v-btn icon to="#start" append>
            <v-icon x-large color="black">arrow_downward</v-icon>
          </v-btn>
        </v-responsive>
      </v-flex>
    </center>
    <center>
      <v-card-actions>
        <center></center>
      </v-card-actions>
    </center>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      panel: [true]
    };
  },
  methods: {
    readLess() {
      this.panel = [false];
    }
  }
};
</script>