  <template>
  <project-header id="carbon" theme="secondary">
    <template v-slot:header>My Project</template>
    <template
      v-slot:subheading
    >A predictive pricing for carbon certificates was awarded first prize at the Siemens-AI-Meets-Blockchain-Hackathon.</template>
    Forget Bitcoin - Blockchain can help reduce CO₂-emissions
    <template v-slot:intro>
      <ClimateGlobe/>
    </template>
    <template v-slot:article>
        <v-layout wrap justify-space-around>
          <v-flex xs12 md3>
            <v-img :src="require('@/assets/pics/globe.jpg')" aspect-ratio="1.7" contain/>
            <p></p>In the 2016 Paris climate treaty the world's peoples decided to strictly regulate Carbon Dioxide emissions to reach
            our climate goals: to prevent the average temperature from warming up by more than 2° degrees till 2100.
            <p></p>To support the world-wide reductions, an emission-trading-system was established, where states can grant the rights to emit a certain amount of CO₂ into the atmosphere.
            <p/>However, since the price of those certificates is not aligned to the climate-goals, this system has contributed little to real emission reduction.
          </v-flex>
          <v-flex xs12 md3>
            <v-img :src="require('@/assets/pics/carbon_.jpeg')" aspect-ratio="1.7" contain/>
            <p/>At last year's Siemens-Hackathon in the Munich AI-Lab we invented an AI-based pricing model which includes current climate goals, by factoring current CO₂ emissions and necessary reductions into the certificate price.
            <p/>The trading system itself is managed by a Smart-Contract-Blockchain, controlling number and price of certificates. A company that works efficiently and has less CO₂ emissions than planned, can sell their rights to another company with higher needs, via the blockchain.
            </v-flex>
            <v-flex xs12 md3>
                 <v-img :src="require('@/assets/pics/blockchain.jpg')" aspect-ratio="1.7" contain/>
                 <p/>
              We chose Blockchain as a trading-platform as it is transparent: Everybody knows who the rightful certificate owner is.
            It is also flexible, meaning you can adapt the pricing-model to new situations and politics. As the system and climate data updates are fully automated by the Chain-Code, it only requires few staff to manage it.
            <p/>
              Blockchain itself can use up a lot of energy and create a huge amount of CO₂ emissions.
              That is something we want to avoid. Therefore we decided on a different consensus strategy than the traditional proof of work approach, which is used in the infamous bitcoin mining farms: Hyperledger's permission-based algorithm runs on standard enterprise servers that don't require many ressources - neither hardware nor energy.
          </v-flex>
          </v-layout>
          <v-layout justify-space-around wrap>
            <v-flex xs12 md3>
            Theoretically this idea could generate a lot of money.<br> The commission for world-wide trade could bring up to two billion a year.
            We see a better trading system as a viable way to reduce CO₂ emission.
            </v-flex>
            <v-flex xs12 md3>
            This is a huge number and - we have to admit - too large a project for us to realise. <br>
            By sharing the concept with different people in politics and within Siemens we hope to initiate changes - big or small. 
            </v-flex>
            <v-flex xs12 md3>
              Click the graph to see how the influence of CO₂ per head and year on the climate goal of Paris.
              </v-flex>
            </v-layout>
      <ClimatePathways/>
    </template>
  </project-header>
</template>
<script>
import ClimatePathways from "./ClimatePathways";
import ClimateGlobe from "./ClimateGlobe";
export default {
  components: {
    ClimateGlobe,
    ClimatePathways
  },
  data() {
    return {
      panel: [false]
    };
  },
  methods: {
    readLess() {
      this.panel = [false];
    }
  }
};
</script>


