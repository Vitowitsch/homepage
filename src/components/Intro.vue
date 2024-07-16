<template>
  <div :class="['ml-5']">
    <v-row>
      <v-col cols="12" sm="6">
        <div style="color: teal">:~$ git config --list</div>
        <hr />
        user.name= Veit Wehner
        <hr />
        user.made.in= Germany
        <hr />
        user.location= Erlangen, Germany
        <hr />
        user.email= info@botsandbytes.de
        <hr />
        user.code= https://github.com/Vitowitsch/
        <hr />

        <br />Welcome! My name is Veit Wehner.
        <br />
        <br />If you are looking for an experienced software architect,
        programmer and data-scientist, I might be the right person for you. I
        have a broad range of expert IT knowledge and demonstrated experiences
        with AI, Cloud, Big-Data, Blockchain, Embedded, Backend- and Frontend,
        Clean-Code, Agile and lots of other areas.
        <br />
        <br />With an M.Sc. in Computer Science and Mathematics, certification
        as software architecture and data-scientist, and a lot of experience I
        have the understanding for complex requirements. Nonetheless, my motto
        is to keep it as simple as possible.
        <br />
        <!--<br />At the moment I am working for Siemens in Europe, where I got
        excellent recommendations. <br />In addition, I am looking for
        interesting side projects. About some of them you can read in my blog.
        <br />-->
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          :class="['mt-5']"
          :src="introImage"
          aspect-ratio="2.6"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import introImage from '@/assets/pics/intro.jpg';

export default {
  data() {
    return {
      panel: [true],
      introImage: introImage,
    };
  },
  methods: {
    readLess() {
      this.panel = [false];
    },
  },
};
</script>

<style scoped>
.routerlink {
  color: blue;
  font-weight: normal;
}
</style>
