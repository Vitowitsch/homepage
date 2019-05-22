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
          <base-text>
            <v-layout wrap justify-space-around>
              <v-flex xs12 md3>
                <div style="color:teal">:~$ git config --list</div>
                <hr>user.name= Veit Wehner
                <hr>user.DOB= 2 October 1978
                <hr>user.made.in= Germany
                <hr>user.location= Gerstenbergstr. 8, Erlangen, Germany
                <hr>user.email= wehner@posteo.de
              </v-flex>

              <v-flex xs12 md3>
                This page for getting us in contact if you are looking for an experienced Softwarearchitect or Fullstack-Developer.
                <p></p>Find below information of what I am doing at professionally and by hobby. If you are looking for someone with a
                broad range of expert IT knowledge you go right with me. I have demostrated history of working as
                Full-Stack-Developer and Software-Architect. Skilled in AI, Cloud, Big-Data, Embedded, Backend- and Frontend, Clean-Code,
                Agile and lots of other areas I can provide value to your project.
              </v-flex>
              <v-flex xs12 md3>
                My motto is to keep it simple but I with with
                a M.Sc. in Computer Science and Mathematics and a lot of experience I have the understanding for complex requirements.
                <p></p>At the time, I am working at Siemens for customers in Europe with excellent recommendations. But I can take on
                other interesting projects as a freelancer in Home Office. I would be happy to get in contact if you have any fitting projects.
                If it works out well there is always the option to switch to full-time.
              </v-flex>
            </v-layout>
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