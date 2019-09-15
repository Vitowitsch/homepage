<template>
  <div>
    <RailRadar :post="post"/>
    <CityToll :post="post"/>
    <Carbon :post="post"/>
    <Cognac :post="post"/>
  </div>
</template>

 <script>
import VueDisqus from "vue-disqus/VueDisqus";
import RailRadar from "./RailRadar";
import CityToll from "./CityToll";
import Cognac from "./Cognac";
import Carbon from "./Carbon";
export default {
  name: "blog-post",
  resource: "BlogPost",
  components: { VueDisqus, RailRadar, CityToll, Carbon, Cognac },
  props: { post: String },
  data() {
    return {
      author: "Veit Wehner",
      content: "",
      published: "2019-06-17T18:31:01Z",
      commentsReady: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../sass/app";
</style>
