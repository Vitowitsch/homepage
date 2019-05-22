<template>
  <center :class="`indigo--text`" style="border: 1px dotted black  ;padding: 20px;">
    <slot name="header"/>
    <h1 :class="`black--text`">
      <slot></slot>
    </h1>
  </center>
</template>
<style scoped>
</style>
