<template>
<v-container id="blog">
  <v-data-iterator
    :items="items"
    :items-per-page.sync="itemsPerPage"
    :page="page"
    hide-default-footer
  >
    <template v-slot:default="props">
      <v-row>
        <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="3">
          <Teaser>
            <template v-slot:title>
              {{item.title}}
            </template>
              <template v-slot:subtitle>
              {{item.subtitle}}
            </template>
            <template v-slot:img>
              <v-img :src="item.img" height="194"></v-img>
            </template>
            <template v-slot:default>
              <component v-bind:is="item.component" />
            </template>
          </Teaser>
        </v-col>
      </v-row>
    </template>
    <template v-slot:footer>
      <v-row class="mt-2" align="center" justify="center">
        <span class="mr-4 grey--text">Page {{ page }} of {{ numberOfPages }}</span>
        <v-btn fab dark color="teal" class="mr-1" @click="formerPage">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab dark color="teal" class="ml-1" @click="nextPage">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </template>
  </v-data-iterator>
  </v-container>
</template>

<script>
import Carbon from "@/views/blog/Carbon";
import RailRadar from "@/views/blog/RailRadar";
import Consensus from "@/views/blog/Consensus";
import CityToll from "@/views/blog/CityToll";
import Cognac from "@/views/blog/Cognac";
import Teaser from "@/components/blog/Teaser";

export default {
  components: { Teaser, CityToll, RailRadar, Cognac, Consensus, Carbon },
  data() {
    return {
      page: 1,
      items: [
        {
          component: "Carbon",
          title: "Forget Bitcoin",
          subtitle: "Blockchain can help reduce CO₂-emissions",
          img:
            "https://sanvito-blog.s3.eu-central-1.amazonaws.com/carbon/eisi.jpg"
        },
        {
          component: "RailRadar",
          title: "RailRadar",
          subtitle: "Ein Siemens-Intrapreneurs Projekt",
          img:
            "https://sanvito-blog.s3.eu-central-1.amazonaws.com/railradar/train-station-accidant.png"
        },
        {
          component: "CityToll",
          subtitle: "Pollution is in the air",
          title: "CityTax",
          img:
            "https://sanvito-blog.s3.eu-central-1.amazonaws.com/citytoll/smog.jpg"
        },
        {
          component: "Cognac",
          title: "Speech Recognition",
          subtitle: "A suite of machine learning models helping air-traffic-controllers",
          img: "https://sanvito-blog.s3.eu-central-1.amazonaws.com/atc/atc2.png"
        },
        {
          component: "Consensus",
          title: "POW, POS ... WTF",
          subtitle: "Exploring Blockchain-Consensus-Strategies",
          img:
            "https://sanvito-blog.s3.eu-central-1.amazonaws.com/consensus/consensus_botsandbytes.png"
        }
      ]
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },

    itemsPerPage: {
      get: function() {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return 1;
          default:
            return 5;
        }
      },
      set: function(newValue) {
        // not needed  , but fixes a warning
      }
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    }
  }
};
</script>
