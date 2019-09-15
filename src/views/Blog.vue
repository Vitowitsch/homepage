<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <blog-footer/>
    <blog-nav :content="content" :filters="filters" :navs="navs" />
    <blog-feed :filters="filters" />
    <blog-post :post="post" />
  </main>
</template>

<script>
import BlogFeed from "@/components/blog/BlogFeed";
import BlogPost from "@/components/blog/BlogPost";
import RailRadar from "@/components/blog/RailRadar";
import BlogFooter from "@/components/blog/BlogFooter";
export default {
  name: "activities",
  components: { BlogFeed, BlogPost, BlogFooter },
  resource: "Blog",
  props: {
    post: String,
    author: String
  },
  data() {
    return {
      navs: 0,
      title: "",
      labels: {
        post: "",
        author: ""
      }
    };
  },
  computed: {
    content() {
      return { title: this.title, labels: this.labels };
    },
    filters() {
      let filters = {};
      if (this.post) filters.post = this.post;
      if (this.author) filters.author = this.author;
      return filters;
    }
  },
  watch: {
    "$route.name"(to, from) {
      if (to !== from) this.navs++;
    }
  },
  mounted() {
    this.$getResource("blog").then(x => {
      // use pace hook to know when rendering is ready
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../sass/app";
</style>

