<template>
  <div :class="['mt-5', 'ml-5', 'mr-5', 'mb-5']" id="blog">
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      hide-default-footer
    >
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="2">
            <v-card>
              <router-link :to="item.component">
                <v-img
                  :src="item.img"
                  :to="item.component"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  aspect-ratio="1.1"
                  contain
                >
                  <v-card-title v-text="item.title"></v-card-title>
                  <v-card-actions>
                    <v-btn text color="teal accent-4" :to="item.component"> Read </v-btn>
                  </v-card-actions>
                </v-img>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template v-if="itemsPerPage == 1" v-slot:footer >
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
  </div>
</template>

<script>
import Carbon from "@/views/blog/Carbon";
import RailRadar from "@/views/blog/RailRadar";
import Consensus from "@/views/blog/Consensus";
import CityToll from "@/views/blog/CityToll";
import Cognac from "@/views/blog/Cognac";

export default {
  components: { CityToll, RailRadar, Cognac, Consensus, Carbon },
  data() {
    return {
      page: 1,
      items: [
        {
          component: "/blog/carbon",
          title: "Forget Bitcoin",
          subtitle: "Blockchain can help reduce CO₂-emissions",
          img: "https://sanvito-blog.s3.eu-central-1.amazonaws.com/carbon/eisi.jpg",
        },
        {
          component: "/blog/railradar",
          title: "RailRadar",
          subtitle: "Ein Siemens-Intrapreneurs Projekt",
          img:
            "https://sanvito-blog.s3.eu-central-1.amazonaws.com/railradar/train-station-accidant.png",
        },
        {
          component: "/blog/citytoll",
          subtitle: "Pollution is in the air",
          title: "CityTax",
          img: "https://sanvito-blog.s3.eu-central-1.amazonaws.com/citytoll/smog.jpg",
        },
        {
          component: "/blog/cognac",
          title: "Speech Recognition",
          subtitle: "A suite of machine learning models helping air-traffic-controllers",
          img: "https://sanvito-blog.s3.eu-central-1.amazonaws.com/atc/atc2.png",
        },
        {
          component: "/blog/consensus",
          title: "POW, POS ... WTF",
          subtitle: "Exploring Blockchain-Consensus-Strategies",
          img:
            "https://sanvito-blog.s3.eu-central-1.amazonaws.com/consensus/consensus_botsandbytes.png",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },

    itemsPerPage: {
      get: function () {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return 1;
          default:
            return 5;
        }
      },
      set: function (newValue) {
        // not needed  , but fixes a warning
      },
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
  },
};
</script>
<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
