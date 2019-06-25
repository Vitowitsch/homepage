<template>
  <main class="activities" :class="{ 'blog--reading': this.post }">
    <blog-nav :content="content" :filters="filters" :navs="navs"/>
    <blog-feed :filters="filters"/>
    Filter:{{filters}}<br>
    Post: {{post}}<br>
    Content: {{content}}<br>
    Navigation: {{navs}}<br>
    <blog-post :post="post"/>

    <blog-footer/>
  </main>
</template>

<script>
import BlogNav from "@/components/blog/BlogNav";
import BlogFeed from "@/components/blog/BlogFeed";
import BlogPost from "@/components/blog/BlogPost";
import RailRadar from "@/components/blog/RailRadar";
import BlogFooter from "@/components/blog/BlogFooter";
export default {
  name: "activities",
  components: { BlogNav, BlogFeed, BlogPost, BlogFooter},
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
<style lang="scss">
@import "../sass/app";
</style>

