<template>
  <div :class="['ma-5', 'pa-5']">
    <project-headline id="carbon" theme="secondary">
      <template v-slot:header>My Project</template>
      Forget Bitcoin - Blockchain can help reduce CO₂-emissions
    </project-headline>
    <blockquote class="post__subtitle">
      <center :class="['text-h5', 'mb-5']">
        A predictive pricing for carbon certificates was awarded first prize at the
        Siemens-AI-Meets-Blockchain-Hackathon.
      </center>
    </blockquote>
    <article class="columns">
      <ClimateGlobe class="ma-5"/>
      In the 2016 Paris climate treaty the world's peoples decided to strictly regulate
      Carbon Dioxide emissions to reach our climate goals: to prevent the average
      temperature from warming up by more than 2° degrees till 2100.
      <p></p>
      To support the world-wide reductions, an emission-trading-system was established,
      where states can grant the rights to emit a certain amount of CO₂ into the
      atmosphere.
      <p />
      However, since the price of those certificates is not aligned to the climate-goals,
      this system has contributed little to real emission reduction.
      <p />
      <v-img :src="require('@/assets/pics/globe.jpg')" aspect-ratio="2.5" contain class="ma-5"/>
      At last year's Siemens-Hackathon in the Munich AI-Lab we invented an AI-based
      pricing model which includes current climate goals, by factoring current CO₂
      emissions and necessary reductions into the certificate price.
      <p />
      The trading system itself is managed by a Smart-Contract-Blockchain, controlling
      number and price of certificates. A company that works efficiently and has less CO₂
      emissions than planned, can sell their rights to another company with higher needs,
      via the blockchain.
      <p />
      We chose Blockchain as a trading-platform as it is transparent: Everybody knows who
      the rightful certificate owner is. It is also flexible, meaning you can adapt the
      pricing-model to new situations and politics. As the system and climate data updates
      are fully automated by the Chain-Code, it only requires few staff to manage it.
      <p></p>
      <br />
      Blockchain itself can use up a lot of energy and create a huge amount of CO₂
      emissions. That is something we want to avoid. Therefore we decided on a different
      consensus strategy than the traditional proof of work approach, which is used in the
      infamous bitcoin mining farms: Hyperledger's permission-based algorithm runs on
      standard enterprise servers that don't require many ressources - neither hardware
      nor energy.
      <p></p>
      Theoretically this idea could generate a lot of money. The commission for world-wide
      trade could bring up to two billion a year.
      <p></p>
      This is a huge number and - we have to admit - too large a project for us to
      realise.
      <br />We see a better trading system as a viable way to reduce CO₂ emission. By
      sharing the concept with different people in politics and within Siemens we hope to
      initiate changes - big or small.
      <p></p>
      Click the graph to see how the influence of CO₂ per head and year on the climate
      goal of Paris.
      <ClimatePathways class="ma-5"/>
      <span :class="['font-italic', 'mt-5']"
        >Team Carbon: Johannes Oberreuter, Elena Scepankova, Veit Wehner</span
      >
    </article>
  </div>
</template>
<script>
import VueDisqus from "vue-disqus/VueDisqus";
import ClimatePathways from "@/components/projects/ClimatePathways";
import ClimateGlobe from "@/components/projects/ClimateGlobe";
export default {
  components: { VueDisqus, ClimateGlobe, ClimatePathways },
};
</script>
<style scoped>
article {
  -webkit-columns: 2 200px;
  -moz-columns: 2 200px;
  columns: 2 200px;
  -webkit-column-gap: 4em;
  -moz-column-gap: 4em;
  column-gap: 4em;
  -webkit-column-rule: 1px dotted #ddd;
  -moz-column-rule: 1px dotted #ddd;
  column-rule: 1px dotted #ddd;
}
</style>
