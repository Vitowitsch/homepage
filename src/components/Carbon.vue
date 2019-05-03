  <template>
  <v-container justify-space-between>
    <v-layout>
      <div class="display-4">Forget Bitcoin - Blockchain can help reduce CO₂-emissions</div>
    </v-layout>
    <v-layout mt-5 mb-5>
      <v-img :src="require('@/assets/pics/globe.jpg')" aspect-ratio="3.0" contain/>
    </v-layout>
    <v-layout wrap justify-space-around>
      <v-flex xs12>
        <base-text mb-5>
          A predictive pricing for carbon certificates was awarded first prize at the Siemens-AI-Meets-Blockchain-Hackathon.
          In the 2016 Paris climate treaty the world's peoples decided to strictly regulate Carbon Dioxide emissions to reach our climate goals: to prevent the average temperature from warming up by more than 2° degrees till 2100.
          To support the world-wide reductions, an emission-trading-system was established, where states can grant the rights to emit a certain amount of CO₂ into the atmosphere. However, since the price of those certificates is not aligned to the climate-goals, this system has contributed little to real emission reduction.
          At last year's Siemens-Hackathon in the Munich AI-Lab we invented an AI-based pricing model which includes current climate goals, by factoring current CO₂ emissions and necessary reductions into the certificate price. The trading system itself is managed by a Smart-Contract-Blockchain, controlling number and price of certificates. A company that works efficiently and has less CO₂ emissions than planned, can sell their rights to another company with higher needs, via the blockchain.
          We chose Blockchain as a trading-platform as it is transparent: Everybody knows who the rightful certificate owner is.
          It is also flexible, meaning you can adapt the pricing-model to new situations and politics. As the system and climate data updates are fully automated by the Chain-Code, it only requires few staff to manage it.
          Blockchain itself can use up a lot of energy and create a huge amount of CO₂ emissions. That is something we want to avoid. Therefore we decided on a different consensus strategy than the traditional proof of work approach, which is used in the infamous bitcoin mining farms: Hyperledger's permission-based algorithm runs on standard enterprise servers that don't require many ressources - neither hardware nor energy.
          Theoretically this idea could generate a lot of money. The commission for world-wide trade could bring up to two billion a year. This is a huge number and - we have to admit - too large a project for us to realise. We see a better trading system as a viable way to reduce CO₂ emission.
          By sharing the concept with different people in politics and within Siemens we hope to initiate changes - big or small.
          <p></p>Team Carbon: Elena Scepankova, Veit Wehner, Johannes Oberreuter
        </base-text>
      </v-flex>
      <v-flex xs12 mt-5>
        <v-img :src="require('@/assets/pics/carbon_.jpeg')" aspect-ratio="3.0" contain/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      e1: 0
    };
  }
};
</script>
