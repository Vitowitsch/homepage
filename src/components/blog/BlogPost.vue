<template>
  <transition name="post">
    <article v-if="allReady" class="post">
      <header class="post__header">
        <h2 class="post__title">{{ title }}</h2>
        <h3 class="post__meta">
          by
          <span class="post__sep"></span>
          <time>{{ prettyDate(published) }}</time>
        </h3>
        <blockquote class="post__subtitle">{{ description }}</blockquote>
      </header>
      <section class="post__body rte" v-html="content"></section>
      <footer class="post__footer">
        <vue-disqus
          v-if="commentsReady"
          shortname="vue-blog-demo"
          :key="post"
          :identifier="post"
          :url="`https://vue-blog-demo.netlify.com/read/${post}`"
        />
      </footer>
    </article>
  </transition>
</template>

<script>
import VueDisqus from "vue-disqus/VueDisqus";
import { kebabify, prettyDate } from "@/utils/helpers";
export default {
  name: "blog-post",
  resource: "BlogPost",
  components: { VueDisqus },
  props: { post: String },
  data() {
    return {
      title: "cycling down the danube",
      author: "Veit Wehner",
      content:
        "While bored at walking speed and overchallenged at driving speed, \
      the brain is stimulated perfectly when moving with 15 mph on a bike. \
      With time and permission from my boss and my family I am happy to take on some bike tours this year. ",
      published: "2019-06-17T18:31:01Z",
      description: "Cycling",
      commentsReady: false,
      ready: true
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