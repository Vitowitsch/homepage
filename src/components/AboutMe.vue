<template>
  <section id="about" class="hide-overflow">
    <v-layout white>
      <v-flex xs12 md6 pa-5>
        <base-heading class="info--text">About Me</base-heading>

        <base-text class="mb-5">
          Experienced Software Architect with a demonstrated history of working in software development.
          <br>Skilled in AI, Blockchain, Big Data, Agile Methods, Clean Code, Java, C++ and others.
          <br>Strong engineering professional with a M.Sc. focused in Computer Science and Mathematics from The Julius Maximilians University of Würzburg.
        </base-text>

        <base-subheading class="info--text">Skills</base-subheading>
        <base-text class="mb-5">Fullstack Software Architect and Developer</base-text>

        <!-- <v-alert outlined color="info">
          <v-layout v-for="(skill, i) in skills" :key="i" style="color: #69A1BB;" wrap>
            <v-flex xs6 text-uppercase v-text="skill.name"/>
            <v-flex xs6 text-xs-right v-text="`${skill.value}%`"/>
            <v-progress-linear :value="skill.value" color="info" height="8"/>
          </v-layout>
        </v-alert> -->
      </v-flex>
      <v-flex hidden-sm-and-down md6>
        <!-- <my-canvas></my-canvas> -->
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
// import MyCanvas from "./Canvas.vue";
export default {
  // components: {
  //   "my-canvas": MyCanvas
  // },
  data: () => ({
    skills: [
      {
        name: "Fullstack-Development",
        value: 95
      },
      {
        name: "Software-Architecture",
        value: 95
      },
      {
        name: "Back-End-Development / Micro-Services",
        value: 95
      },
      {
        name: "Front-End-Development / Micro-Frontends",
        value: 75
      },
      {
        name: "Big-Data",
        value: 70
      },
      {
        name: "Artificial Intelligence / Data-Science",
        value: 75
      },
      {
        name: "Agile Methods",
        value: 80
      },
      {
        name: "Continuous Integration / -Delivery",
        value: 92
      }
    ]
  })
};
</script>
