<template>
  <center>
    <project-headline>
      botsandbytes
      <template v-slot:header>about</template>
    </project-headline>
    <v-layout wrap justify-space-around align-start class="text-xs-left subtitle-2" >
      <v-flex xs12 md5>
        Welcome!
        My name is Veit Wehner. If you are looking for an experienced software architect or full stack developer, I might be the right person for you.
        I have a broad range of expert IT knowledge and demonstrated experiences with AI, Cloud, Big-Data, Embedded, Backend- and Frontend, Clean-Code, Agile and lots of other areas.
      </v-flex>
      <v-flex xs12 md5>
        My motto is to keep it simple, but I with an M.Sc. in Computer Science and Mathematics and a lot of experience I have the understanding for complex requirements.
        At the moment I am working at Siemens for customers in Europe, where I got excellent recommendations. I want to take on interesting projects as a freelancer. If you have any fitting projects, please get in contact with me. There is always an option to switch to full time.
      </v-flex>
    </v-layout>
    <v-layout wrap mt-5 justify-space-around class="text-sm-left">
      <v-flex xs12 md5 fluid>
        <div style="color:teal">:~$ git config --list</div>
        <hr />user.name= Veit Wehner
        <hr />user.DOB= 2 October 1978
        <hr />user.made.in= Germany
        <hr />user.location= Gerstenbergstr. 8, Erlangen, Germany
        <hr />user.email= info@botsandbytes.de
      </v-flex>
      <v-flex xs12 md5 primary mb-5>
        <v-img :src="require('@/assets/pics/intro.jpg')" aspect-ratio="3.0"></v-img>
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