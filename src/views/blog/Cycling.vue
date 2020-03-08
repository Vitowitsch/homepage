<template>
  <article v-if="allReady" class="post">
    <header class="post__header">
      <h2 class="post__title">{{ title }}</h2>
      <h3 class="post__meta">
        <span class="post__sep"></span>
        <time>{{ prettyDate(published) }}</time>
      </h3>
      <blockquote class="post__subtitle">{{ description }}</blockquote>
    </header>
    <section class="post__body rte">
      While bored at walking speed and overchallenged at driving speed,
      the brain is stimulated perfectly when moving with 15 mph on a bike.
      With time and permission from my boss and my family I am happy to take on some bike tours this year.
      <p></p>You can transport the bike on a train
    </section>

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
</template>
