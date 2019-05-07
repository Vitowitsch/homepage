  <template>
  <article>
    <!-- <v-chart :options="options"/> -->
    <v-container fluid justify-space-between>
      <center>
        <div class="headline">
          <p>
            <span>Project</span>
          </p>
          <h1>Forget Bitcoin - Blockchain can help reduce CO₂-emissions</h1>
        </div>
      </center>
      <v-layout xs12 mt-5 mb-5>
        <v-flex xs12>
          <World/>
        </v-flex>
        <!-- <v-img :src="require('@/assets/pics/globe.jpg')" aspect-ratio="3.0" contain/> -->
      </v-layout>
      <v-layout wrap justify-space-around>
        <v-flex xs12 md5>
          <!-- <v-chart :options="globe"/> -->
          <base-text>
            A predictive pricing for carbon certificates was awarded first prize at the Siemens-AI-Meets-Blockchain-Hackathon.
            In the 2016 Paris climate treaty the world's peoples decided to strictly regulate Carbon Dioxide emissions to reach our climate goals: to prevent the average temperature from warming up by more than 2° degrees till 2100.
            To support the world-wide reductions, an emission-trading-system was established, where states can grant the rights to emit a certain amount of CO₂ into the atmosphere. However, since the price of those certificates is not aligned to the climate-goals, this system has contributed little to real emission reduction.
            At last year's Siemens-Hackathon in the Munich AI-Lab we invented an AI-based pricing model which includes current climate goals, by factoring current CO₂ emissions and necessary reductions into the certificate price. The trading system itself is managed by a Smart-Contract-Blockchain, controlling number and price of certificates. A company that works efficiently and has less CO₂ emissions than planned, can sell their rights to another company with higher needs, via the blockchain.
          </base-text>
          <ClimateForecast/>
        </v-flex>
        <v-flex xs12 md5>
          <base-text>
            We chose Blockchain as a trading-platform as it is transparent: Everybody knows who the rightful certificate owner is.
            It is also flexible, meaning you can adapt the pricing-model to new situations and politics. As the system and climate data updates are fully automated by the Chain-Code, it only requires few staff to manage it.
            Blockchain itself can use up a lot of energy and create a huge amount of CO₂ emissions. That is something we want to avoid. Therefore we decided on a different consensus strategy than the traditional proof of work approach, which is used in the infamous bitcoin mining farms: Hyperledger's permission-based algorithm runs on standard enterprise servers that don't require many ressources - neither hardware nor energy.
            Theoretically this idea could generate a lot of money. The commission for world-wide trade could bring up to two billion a year. This is a huge number and - we have to admit - too large a project for us to realise. We see a better trading system as a viable way to reduce CO₂ emission.
            By sharing the concept with different people in politics and within Siemens we hope to initiate changes - big or small.
            <v-img :src="require('@/assets/pics/carbon_.jpeg')" aspect-ratio="3.0" contain/>Elena Scepankova, Johannes Oberreuter, Veit Wehner
          </base-text>
        </v-flex>
      </v-layout>
    </v-container>
  </article>
</template>
<script>
import ClimateForecast from "./ClimateForecast";
import World from "./World";
export default {
  components: {
    ClimateForecast,
    World
  }
};
</script>
<style>
.headline {
  position: relative;
  display: inline-block;
  border: 1px solid #252525;
  margin-bottom: 120px;
  color: #252525;
  font: 12px "PT Sans", sans-serif;
  line-height: 20px;
  text-align: center;
}

.headline p span {
  padding: 0 10px;
  background-color: #fff;
}

.headline h1 {
  padding: 10px 15px;
  margin-bottom: 0;
  text-transform: uppercase;
  line-height: 53px;
}

h1 {
  margin-bottom: 14px;
  font-size: 36px;
  line-height: 57px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #252525;
  font-family: "Oswald", sans-serif;
  font-weight: normal;
}


element.style {
    text-align: justify;
    line-height: 18px;
}

p {
    margin-bottom: 20px;
}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
</style>

