<template>
  <center>
    <v-flex xs12 md10>
      <v-card>
        <title-header>
          Veit Wehner
          <template v-slot:header>
            Softwarearchitekt
            <br>Fullstack-Developer
          </template>
        </title-header>
        <!-- <v-responsive :aspect-ratio="1/4"> -->
        <!-- <v-parallax :src="require('@/assets/pics/intro.jpg')"></v-parallax> -->
        <!-- </v-responsive> -->
        <v-card-media>
          <v-img :src="require('@/assets/pics/intro.jpg')" aspect-ratio="3.0"></v-img>
        </v-card-media>
        <v-card-text>
          <div class="display-2 mt-5 mb-3">
            <u>about</u>
          </div>
          <base-text>
            I am an experienced Software Architect with a M.Sc. in Computer Science and Mathematics.
            I am skilled on a broad range from Embedded-Systems to Cloudcomputing.
            <br>My actual focus is on AI, Blockchain, Big Data, Agile Methods and Clean Code and others.
            I have a demostrated history of working as Full-Stack-Developer and Software-Architect. You can find a small part of my projects below.
            <p></p>At the time, I have a Sponsorship Project running at Siemens in part-time. I can take on other interesting projects as a freelancer in Home Office.
            I would be happy to get in contact if you have any fitting projects. If it works out well there is always the option to switch to full-time.
          </base-text>
          <v-btn to="#start" append>continue</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </center>
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