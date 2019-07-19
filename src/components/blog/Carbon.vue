<template>
  <article v-if="allReady" class="post">
    <header class="post__header">
      <h2 class="post__title">{{ title }}</h2>
      <h3 class="post__meta">
        <span class="post__sep"></span>
        <time>{{ prettyDate(published) }}</time>
      </h3>
      <blockquote class="post__subtitle">{{ description }}</blockquote>
    </header>
    <section class="post__body rte">
      <project-headline id="carbon" theme="secondary">
        <template v-slot:header>My Project</template>
        Forget Bitcoin - Blockchain can help reduce CO₂-emissions
      </project-headline>
      <center>
        <div
          class="title"
        >A predictive pricing for carbon certificates was awarded first prize at the Siemens-AI-Meets-Blockchain-Hackathon.</div>
      </center>
      <v-layout justify-center mt-2 mb-4 wrap justify-start>
        <ClimateGlobe/>
      </v-layout>
      <p></p>
      <v-img :src="require('@/assets/pics/globe.jpg')" aspect-ratio="1.7" contain/>
      <p></p>In the 2016 Paris climate treaty the world's peoples decided to strictly regulate Carbon Dioxide emissions to reach
      our climate goals: to prevent the average temperature from warming up by more than 2° degrees till 2100.
      <p></p>To support the world-wide reductions, an emission-trading-system was established, where states can grant the rights to emit a certain amount of CO₂ into the atmosphere.
      <p/>However, since the price of those certificates is not aligned to the climate-goals, this system has contributed little to real emission reduction.
      <p></p>
      <v-img :src="require('@/assets/pics/carbon_.jpeg')" aspect-ratio="1.7" contain/>
      <p/>At last year's Siemens-Hackathon in the Munich AI-Lab we invented an AI-based pricing model which includes current climate goals, by factoring current CO₂ emissions and necessary reductions into the certificate price.
      <p/>The trading system itself is managed by a Smart-Contract-Blockchain, controlling number and price of certificates. A company that works efficiently and has less CO₂ emissions than planned, can sell their rights to another company with higher needs, via the blockchain.
      <p></p>
      <v-img :src="require('@/assets/pics/blockchain.jpg')" aspect-ratio="1.7" contain/>
      <p/>We chose Blockchain as a trading-platform as it is transparent: Everybody knows who the rightful certificate owner is.
      It is also flexible, meaning you can adapt the pricing-model to new situations and politics. As the system and climate data updates are fully automated by the Chain-Code, it only requires few staff to manage it.
      <p/>Blockchain itself can use up a lot of energy and create a huge amount of CO₂ emissions.
      That is something we want to avoid. Therefore we decided on a different consensus strategy than the traditional proof of work approach, which is used in the infamous bitcoin mining farms: Hyperledger's permission-based algorithm runs on standard enterprise servers that don't require many ressources - neither hardware nor energy.
      <p></p>Theoretically this idea could generate a lot of money.
      <br>The commission for world-wide trade could bring up to two billion a year.
      We see a better trading system as a viable way to reduce CO₂ emission.
      <p></p>This is a huge number and - we have to admit - too large a project for us to realise.
      <br>By sharing the concept with different people in politics and within Siemens we hope to initiate changes - big or small.
      <p></p>Click the graph to see how the influence of CO₂ per head and year on the climate goal of Paris.
      <v-layout justify-center mt-2 mb-4 wrap justify-start>
        <ClimatePathways/>
      </v-layout>
    </section>

    <footer class="post__footer">
      <vue-disqus
        v-if="commentsReady"
        shortname="vue-blog-demo"
        :key="post"
        :identifier="post"
        :url="`https://vue-blog-demo.netlify.com/read/${post}`"
      />
    </footer>
  </article>
</template>

 <script>
import VueDisqus from "vue-disqus/VueDisqus";
import { scrollTo, kebabify, prettyDate } from "@/utils/helpers";
import ClimatePathways from "@/components/projects/ClimatePathways";
import ClimateGlobe from "@/components/projects/ClimateGlobe";
export default {
  resource: "BlogPost",
  components: { VueDisqus, ClimateGlobe, ClimatePathways },
  props: { post: String },
  data() {
    return {
      panel: [false],
      title: "",
      author: "Veit Wehner",
      content: "",
      published: "2019-06-17T18:31:01Z",
      description: "",
      commentsReady: false,
      ready: true
    };
  },
  computed: {
    allReady() {
      return this.ready && "carbon" === this.post;
    }
  },
  methods: {
    kebabify,
    prettyDate
  },
  mounted() {
    if (!this.post) {
      this.ready = true;
      return;
    }
    this.$getResource("post", this.post)
      .then(this.showComments)
      .then(() => {
        this.ready = true;
      });
  }
};
</script>