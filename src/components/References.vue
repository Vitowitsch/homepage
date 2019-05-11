<template>
  <v-carousel cycle="false" id="references" lazy>
    <project-headline>
      <template v-slot:header>Personal</template>
      References
    </project-headline>
    <v-carousel-item v-for="r in refs" :key="r.text">
      <v-container>
        <v-layout justify-space-around wrap>
          <v-flex xs12 md5>
            <reference-text>
              <template v-slot:header>{{r.position}}</template>
              {{r.who}}
            </reference-text>
          </v-flex>
          <v-flex xs12 md5>
            <div style="font-style: italic;">{{r.text}}</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    refs: [
      {
        text:
          "''I mentored Veit at University Würzburg. We worked together on a range of computer science and mathematics topics, including number theory, sensor nodes and embedded programming. Veit is a quick learner with a good grasp of theory. Working with him is fun and efficient, and even long sessions were enjoyable. He is also a good companion to have during hikes in the Scottish Highlands, and he plays a pretty good game of blind chess. I can recommend him as a team player and as a very skilled software creator.''",
        who: "Johannes Schindelin",
        position: "Maintainer of Git for Windows"
      },
      {
        text:
          "''I had the opportunity to work with Veit on a project by Siemens Mobility developing software for High-speed and Intercity trains. The software we produced was highly valued. What stands out most in Veit's personality is his entrepreneurship and social competence. It was a pleasure working with him and I am looking forward to the next joint project.''",
        who: "Joao Teixeira Soares",
        position: "Executive Director at EULA IT GmbH"
      },
      {
        text:
          "''I worked together with Veit as Software Architect in a team of 8 colleagues and from the first day he impressed me with his curiosity and interest in new ways to solve problems while at the same time finishing things on time. In this sense he finds a good balance between quality and speed. I came to know Veit as a helping, reflective and open personality and I would like to work with him again but unfortunately our professional paths diverged. I thank Veit for having been such a good fellow and I am sure anybody working with him will experience the like.''",
        who: "Thomas Bertz",
        position: "IT Consultant, Software Developer and Trainer"
      },
      {
        text:
          "''We only worked together during a 48-hour lasting Hackathon, therefore non-stop and under high pressure. I experienced Veit as an outstanding visionary mind, excelling in product ownership, development and team management. Due to his high technical expertise & enterpreneurial spirit, working with him is fun and efficient. Veit embodies the Vision, intellect & social skills which will be a great addition to every team that has the chance to work with him.''",
        who: "Julia Gottfriedsen",
        position: "ML Enthusiast | Environmental Engineer | Siemens AI Lab"
      },
      {
        text:
          "''I had very positive experience with Veit Wehner. He showed great amount of self-organization and integrity. \
          We value him for his broad experience with software development, his deep technical understanding, \
          remarkable efficiency, extraordinary team spirit and targeted communication. \
          He is the kind of employee you could wish for. I can recommend him very strongly.''",
        who: "%name on request%",
        position: "Siemens Project Manager"
      },
      {
        text:
          "''Veit Wehner always shows initiative, diligence and has good ideas that work in practice. He always reaches the target goals and surpasses them often.''",
        who: "%name on request%",
        position: "Siemens Project Manager"
      }
    ],
    projects: ["ai-hack1.jpg", "intrapreneurs.jpg", "futureland.png", "neo.png"]
  })
};
</script>