<template>
  <center>
    <project-headline>
      botsandbytes
      <template v-slot:header>about</template>
    </project-headline>
    <v-layout class="text-xs-left" wrap pl-4 pr-4>
      <v-flex class="xs12 md5" pb-5 pt-5>
        <v-img :src="require('@/assets/pics/intro.jpg')" contain aspect-ratio="1.0"></v-img>
      </v-flex>
      <v-flex xs12 md6>
          <div style="color:teal;margin-top:55px;">:~$ git config --list</div>
          <hr />user.name= Veit Wehner
          <hr />user.DOB= 2 October 1978
          <hr />user.made.in= Germany
          <hr />user.location= Gerstenbergstr. 8, Erlangen, Germany
          <hr />user.email= info@botsandbytes.de
          <hr />
          <p></p>
          <br />
          <br />
          <br />

          <br />

          <br />Welcome!
          My name is Veit Wehner.
          <br />
          <br />If you are looking for an experienced software architect, I might be the right person for you.
          I have a broad range of expert IT knowledge and demonstrated experiences with AI, Cloud, Big-Data, Blockchain, Embedded, Backend- and Frontend, Clean-Code, Agile and lots of other areas.
          <br />
          <br />With an M.Sc. in Computer Science and Mathematics and a lot of experience I have the understanding for complex requirements. Nonetheless, my motto is to keep it as simple as possible.
          <br />
          <br />At the moment I am working for Siemens in Europe, where I got excellent recommendations.
          <br />In addition, I am looking for interesting side projects.
          <router-link to="/blog" class="routerlink">About some of them you can read in my blog</router-link>.
          <br />
      </v-flex>
    </v-layout>
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
<style scoped>
.routerlink {
  color: blue;
  font-weight: normal;
}
</style>