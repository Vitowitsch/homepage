  <template>
  <v-container justify-space-between>
    <v-layout>
      <div class="display-4">Pollution is in the air</div>
    </v-layout>
    <v-layout mt-5 mb-5>
      <div class="display-2">A smart city toll system (Cito) made second prizes</div>
    </v-layout>
    <v-layout wrap justify-space-around>
      <v-flex xs12>
        <base-text mb-5>
          The estimated number of premature deaths due to traffic related air pollution is estimated by 60 thousand per year in Germany. Even if this number is controversial, 65 German cities surpassed the pollution levels in 2017. If they all were fined by the EU, this would add up to millions of Euros.
          <p></p>Traffic related pollution was one of the topics at the 2018’s <a href="https://www.bmu.de/service/veranstaltungen/wettbewerbe/code4green">Code4Green</a> hackathon at the ministry of environment. It took place in the ministry itself that had been perfectly equipped with beds and all the stuff you need for a 24h hackathon. Even Minister Svenja Schulze herself showed up.
          <p></p>I was part of a team of seven. The idea for the final project only emerged the night before the hackathon: We built a smart system that calculates dynamic price for entering - or parking - in the city, based on the real time NOx level. It should also include a 24h hours forecast. There were two options for billing: Either an IOT device on the car that would automatically deduct the payment from a prepaid account when it entered a city zone, or smart parking ticket vending machines.
          </base-text mb-5>
          </v-flex>
          <v-flex xs9 mt-5 mb-5>
           <v-img :src="require('@/assets/pics/code4green-device.jpg')" aspect-ratio="2.0" />
           </v-flex>
           <v-flex>
           <base-text mb-5>
          <p></p>Our hackathon IoT-prototype retrieves real time and forecast pollution data from our cloud service. The city toll is deducted from a prepaid account, based on GPS and NOx level. Users can see their account balance, a 24 hour pollution forecast with corresponding prices on their mobile phones.
          <p></p>We hope that this is a first step towards fewer cars and better air in cities. Cito can enforce legal pollution thresholds and bans on diesel cars - without tracking any personal GPS data.
          <p></p>Let us turn the grey sky blue again!
        </base-text>
        </v-flex>
    </v-layout>
    <v-layout align-center mt-5>
              <youtube :video-id="getVideoId()"></youtube>
              </v-layout>
  </v-container>
</template>
<script>
import { getIdFromURL } from 'vue-youtube-embed'
export default {
  data() {
    return {
      e1: 0
    };
  },
  methods:{
    getVideoId(){
      return  getIdFromURL('https://youtu.be/rVUP4-I9TJ4');
    }
  }
};
</script>
