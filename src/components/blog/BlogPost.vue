<template>
  <div>
    Props: {{props}}
    {{this.post === 'railradar'}}
    <RailRadar :post="post"/>
    <Cycling :post="post" />
  </div>
</template>

 <script>
import VueDisqus from "vue-disqus/VueDisqus";
import { kebabify, prettyDate } from "@/utils/helpers";
import Cycling from "./Cycling";
import RailRadar from "./RailRadar";
export default {
  name: "blog-post",
  resource: "BlogPost",
  components: { VueDisqus, Cycling, RailRadar },
  props: { post: String },
  data() {
    return {
      author: "Veit Wehner",
      content: "",
      published: "2019-06-17T18:31:01Z",
      commentsReady: false,
    };
  },
  computed: {
    allReady() {
      return this.ready && this.post;
    }
  },
  methods: {
    kebabify,
    prettyDate
  },
  mounted() {
    if (!this.post) {
      this.ready = true;
      return;
    }
    this.$getResource("post", this.post)
      .then(this.showComments)
      .then(() => {
        this.ready = true;
      });
  }
};
</script>