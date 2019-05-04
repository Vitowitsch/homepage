<template>
  <section id="skills" class="hide-overflow">
    <v-layout wrap>
      <v-flex xs12 md6 primary text-xs-center pa-5 white--text>
        <base-heading>Skills</base-heading>
        <skill-bar
          v-for="(data, index) in skills"
          v-bind:key="index"
          barSize="small"
          :skill="data.skill"
          :level="data.level"
        />
      </v-flex>
      <v-flex md6>
        <!-- <bubbles/> -->
        <!-- <v-img :src="require('@/assets/welcome.png')" height="100vh"/> -->
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import SkillBar  from "./SkillBar.vue";
export default {
  components: {
    "skill-bar": SkillBar,
  },
  data: function() {
    return {
      skills: [
        {
          skill: "Programming",
          level: "90"
        },
        {
          skill: "Databases",
          level: "90"
        },
        {
          skill: "Big-Data",
          level: "90"
        },
        {
          skill: "Connectivity / IoT",
          level: "90"
        },
        {
          skill: "Docker",
          level: "90"
        },
        {
          skill: "Cloud-Computing",
          level: "90"
        },
        {
          skill: "Artificial-Intelligence",
          level: "90"
        },
        {
          skill: "Deep-Learning",
          level: "90"
        },
        {
          skill: "Data-Science",
          level: "90"
        },
        {
          skill: "Big-Data-Analytics",
          level: "90"
        },
        {
          skill: "CI/CD",
          level: "90"
        },
        {
          skill: "git",
          level: "90"
        },
        {
          skill: "Frontend-Development (e.g. Vue.js)",
          level: "90"
        },
        {
          skill: "Agile (e.g. TDD, Scrum, Kanban)",
          level: "90"
        },
        {
          skill:
            "Blockchain (e.g. Hyperledger, Ethereum, Neo, Iota, Solidity, Web3.js)",
          level: "90"
        }
      ]
    };
  }
};
</script>