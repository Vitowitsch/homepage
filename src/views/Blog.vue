<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <!-- <blog-footer/> -->
    <blog-feed :filters="filters" />
    <blog-post :post="post" />
  </main>
</template>

<script>
import BlogFeed from "@/components/blog/BlogFeed";
import BlogPost from "@/components/blog/BlogPost";
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
      if (this.post !="blog"){
        if (this.post) filters.post = this.post;
        if (this.author) filters.author = this.author;
      }
      return filters;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../sass/app";
</style>

