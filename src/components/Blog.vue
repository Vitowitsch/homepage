<template>
  <router-view  />
  <div v-if="!reading_article" :class="['mt-5', 'ml-5', 'mr-5', 'mb-5']" id="blog">
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      hide-default-footer
    >
   
      <template v-slot:default="props">
       
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.title"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card>
              <v-card-actions>
                <v-btn to="/blog/carbon" router text color="teal accent-4">
                 {{item.raw.title}}
                </v-btn>
              </v-card-actions>
              <router-link :to="item.raw.component">
                <v-img
                  :src="item.raw.img"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  aspect-ratio="1.1"
                  contain
                >
                 
                </v-img>
              </router-link>
             
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template v-if="itemsPerPage == 1" v-slot:footer>
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
import Carbon from "@/components/blog/Carbon";
import RailRadar from "@/components/blog/RailRadar";
import CityToll from "@/components/blog/CityToll";
import Cognac from "@/components/blog/Cognac";
import Consensus from "@/components/blog/Consensus";

export default {
  components: { Carbon, RailRadar, CityToll, Cognac, Consensus },
  data() {
    return {
      page: 1,
      reading_article: false,
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
          img: "https://sanvito-blog.s3.eu-central-1.amazonaws.com/railradar/train-station-accidant.png",
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
          img: "https://sanvito-blog.s3.eu-central-1.amazonaws.com/consensus/consensus_botsandbytes.png",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    itemsPerPage: {
      get() {
        return this.$vuetify.display.name === 'xs' ? 1 : 5;
      },
      set(newValue) {
        // not needed, but fixes a warning
      },
    },
    isArticleSelected() {
      return this.items.some(item => this.$route.path.includes(item.component));
    },
  },
  watch: {
    '$route.path'(newPath) {
      this.updateArticleSelected(newPath);
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    validateItems() {
      this.items.forEach((item, index) => {
        if (!item.component) {
          console.error(`Item at index ${index} is missing a component:`, item);
        }
      });
    },
    updateArticleSelected(newPath) {
      this.reading_article = this.items.some(item => newPath.includes(item.component));
    },
  },
  created() {
    this.validateItems();
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
