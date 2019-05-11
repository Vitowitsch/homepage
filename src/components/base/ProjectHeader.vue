<template>
  <v-container>
    <v-flex xs6 v-bind="{[`md${columns}`]: true}">
      <v-expansion-panel light v-model="panelIndex" expand>
        <v-expansion-panel-content>
          <template v-slot:header>
            <p>
              <center>
                <div class="headline">
                  <p>
                    <span>
                      <slot name="header"/>
                    </span>
                  </p>
                  <h1>
                    <slot></slot>
                  </h1>
                </div>
              </center>
            </p>
          </template>
          <v-layout>
            <slot name="article"/>
          </v-layout>
          <div style="align-content: center;">
            <v-btn flat @click="readLess" icon>
              <v-icon>close</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      panel: [false],
      panelIndex: -9,
      mini: true,
      columns: 6
    };
  },
  methods: {
    readLess() {
      this.panel = [false];
    }
  },
  watch: {
    panelIndex: function() {
      console.log("watch panelIndex id: " + this.panelIndex);
      if (true === this.panelIndex[0]) {
        this.columns = 12;
      } else {
        this.columns = 6;
      }
      console.log("cols: " + this.columns);
      //if this panelIndex matches this component's index.. do stuff since we're selected
    }
  }
};
</script>
<style scoped>
.headline {
  position: relative;
  display: inline-block;
  border: 1px solid #252525;
  margin-bottom: 20px;
  color: #252525;
  font: 12px "PT Sans", sans-serif;
  line-height: 20px;
  text-align: center;
  margin-top: 150px;
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

.headline p {
  position: absolute;
  top: -15px;
  right: 0;
  left: 0;
  letter-spacing: 1px;
}

p {
  margin-bottom: 20px;
}
</style>
