<template>
  <p class="base-text">
    <slot/>
  </p>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow");
@import url("https://fonts.googleapis.com/css?family=Oswald");
@import url("https://fonts.googleapis.com/css?family=PT+Sans:400,700");
.base-text {
  padding: 15px 0 5px 30px;
  border-left: 1px solid #e1e1e1;
  margin-top: -10px;
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 300;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 2.1;
}
</style>