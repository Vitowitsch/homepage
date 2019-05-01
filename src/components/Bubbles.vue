<template>
  <d3-network :net-nodes="nodes" :options="options" :nodeSym="nodeSym"/>
</template>

<script>
import D3Network from "vue-d3-network";

const nodeIcon3 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32"><path d="M20 14h-8l6-14-18 18h8l-6 14 18-18z"></path></svg>'

export default {
  name: "Bubbles",
  methods: {
    randomColor() {
      return ("rgb(128,128,128");
    }
  },
  data() {
    return {
      nodes: [
        { id: "ri", name: "AI", _color: this.randomColor(), svgSym: nodeIcon3, fill: "white"},
        { id: "pl", name: "Big-Data", _color: this.randomColor(), fill: "#fff"},
        { id: "pl", name: "Extreme Programming", _color: this.randomColor() },
        { id: "pl", name: "Interpreneurship", _color: this.randomColor() },
        { id: "pl", name: "Dashboards", _color: this.randomColor() },
        { id: "pl", name: "Data-Science", _color: this.randomColor() },
        { id: "pl", name: "Cloud-Computing", _color: this.randomColor() },
        { id: "pl", name: "Docker", _color: this.randomColor() },
        { id: "pl", name: "Software-Architecture", _color: this.randomColor() }
      ],
      options: {
        force: 6000,
        canvas: false,
        nodeLabels: true,
        nodeSize: 100,
        forces: {
          X: "0.5",
          Y: "1",
          ManyBody: true,
          Center: false
        }
        // size: {
        //   w: "1200",
        //   h: "600"
        // }
      },
      nodeSym: "ri.svg"
    };
  },
  components: {
    D3Network
  }
};
</script>

