<template>
  <v-layout mt-4 id="contact">
    <v-flex xs12 md3 offset-sm3>
      <project-headline>
        <template v-slot:header>contact</template>
        Get in Touch
      </project-headline>
    </v-flex>
    <v-flex xs12 md6 offset-sm3>
      <v-card>
        <GmapMap
          :center="{lat:49.59099, lng:11.00783}"
          :zoom="14"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        ></GmapMap>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0"></h3>
            <v-avatar></v-avatar>
            <v-spacer></v-spacer>
            <div>
              <br>Veit Wehner
              <br>91052 Erlangen, Germany
              <br>E-Mail: veit.wehner@gmail.com
              <br>
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import * as VueGoogleMaps from "vue2-google-maps";

export default {
  name: "Contact",
  components: {
    VueGoogleMaps
  },
  mounted() {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
    // this.$refs.mapRef.$mapPromise.then((map) => {
    // map.panTo({lat: 1.38, lng: 103.80})
  },
  data() {
    return {
      card_text:
        "Siemens Mobility GmbH<br>\
        MO RS SC BG EN BMD SE\
        Eggenberger Straße 31\
        8020 Graz, Österreich\
        Fax: +43 51707-53507\
        Mobil: +43 664 88556238\
"
    };
  }
};
</script>