<template>
  <center>
    <v-flex xs12 md10 primary fluid> 
      <v-card color="primary">
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
                <hr>user.email= veit.wehner@gmail.com
              </v-flex>

              <v-flex xs12 md3>
             Welcome!<p/>
                My name is Veit Wehner. If you are looking for an experienced software architect or full stack developer, I might be the right person for you.<p/>
                I have a broad range of expert IT knowledge and demonstrated experiences as with AI, Cloud, Big-Data, Embedded, Backend- and Frontend, Clean-Code, Agile and lots of other areas.<p/>
              </v-flex>
              <v-flex xs12 md3>
                My motto is to keep it simple, but I with an M.Sc. in Computer Science and Mathematics and a lot of experience I have the understanding for complex requirements.<p/>
                At the moment I am working at Siemens for customers in Europe, where I got excellent recommendations. I want to take on interesting projects as a freelancer in Home Office. If you have any fitting projects, please get in contact with me. There is always an option to switch to full time.
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