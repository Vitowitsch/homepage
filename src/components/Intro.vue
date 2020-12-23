<template>
  <div :class="['ml-5']">
    <project-headline>
      botsandbytes
      <template v-slot:header>about</template>
    </project-headline>
    <v-row>
      <v-col cols="12" sm="6">
        <div style="color: teal">:~$ git config --list</div>
        <hr />
        user.name= Veit Wehner
        <hr />
        user.uptime= 2 October 1978
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
        <br />If you are looking for an experienced software architect, I might be the
        right person for you. I have a broad range of expert IT knowledge and demonstrated
        experiences with AI, Cloud, Big-Data, Blockchain, Embedded, Backend- and Frontend,
        Clean-Code, Agile and lots of other areas.
        <br />
        <br />With an M.Sc. in Computer Science and Mathematics and a lot of experience I
        have the understanding for complex requirements. Nonetheless, my motto is to keep
        it as simple as possible.
        <br />
        <br />At the moment I am working for Siemens in Europe, where I got excellent
        recommendations. <br />In addition, I am looking for interesting side projects.
        About some of them you can read in my blog.
        <br />
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          :class="['mt-5']"
          mt-5
          :src="require('@/assets/pics/intro.jpg')"
          aspect-ratio="2.6"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      panel: [true],
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
