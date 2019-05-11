  <template>
  <article>
    <v-container id="citytoll" fluid>
      <project-header>
        <template v-slot:header>My Project</template>
        Pollution is in the air
        <template v-slot:article>
          <v-layout justify-space-around wrap mb-5 mt-5>
            <v-flex xs12 md5>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rVUP4-I9TJ4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs12 md5>
              <v-img :src="require('@/assets/pics/code4green-device.jpg')" aspect-ratio="2.0"/>
            </v-flex>
          </v-layout>
          <center>
            <div class="display-1">A smart city toll system (Cito) made second prizes</div>
          </center>
          <v-layout justify-centerv-ex wrap mt-5>
            <v-flex xs12 md5>
              <base-text>
                The estimated number of premature deaths due to traffic related air pollution is estimated by 60 thousand per year in Germany. Even if this number is controversial, 65 German cities surpassed the pollution levels in 2017. If they all were fined by the EU, this would add up to millions of Euros.
                <p></p>Traffic related pollution was one of the topics at the 2018’s
                <a style="color:black;"
                  href="https://www.bmu.de/service/veranstaltungen/wettbewerbe/code4green"
                >Code4Green</a> hackathon at the ministry of environment. It took place in the ministry itself that had been perfectly equipped with beds and all the stuff you need for a 24h hackathon. Even Minister Svenja Schulze herself showed up.
                <p></p>I was part of a team of seven. The idea for the final project only emerged the night before the hackathon: 
              </base-text>
            </v-flex>
            <v-flex xs12 md5>
              <base-text>
              
                We built a smart system that calculates dynamic price for entering - or parking - in the city, based on the real time NOx level.
                It should also include a 24h hours forecast. <p>There were two options for billing: Either an IOT device on the car that would
                   automatically deduct the payment from a prepaid account when it entered a city zone, or smart parking ticket vending machines.</p>
                Our hackathon IoT-prototype retrieves real time and forecast pollution data from our cloud service. The city toll is deducted from a prepaid account, based on GPS and NOx level. Users can see their account balance, a 24 hour pollution forecast with corresponding prices on their mobile phones.
              </base-text>
            </v-flex>
            <v-flex xs11 mt-5>
              <base-text>
                We hope that this is a first step towards fewer cars and better air in cities. Cito can enforce legal pollution thresholds and bans on diesel cars - without tracking any personal GPS data.
                Let us turn the grey sky blue again!
              </base-text>
            </v-flex>
          </v-layout>
        </template>
      </project-header>
    </v-container>
  </article>
</template>
<script>
import YoutubePlayer from "@/components/base/YoutubePlayer";
export default {
  components: {
    YoutubePlayer
  },
  data() {
    return {
      e1: 0,
      videoId: "lG0Ys-2d4MA"
    };
  },
  methods: {
    getVideoId() {
      return getIdFromURL("https://youtu.be/rVUP4-I9TJ4");
    },
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("o/ we are watching!!!");
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>
<style>
</style>
