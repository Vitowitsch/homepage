<template>
  <center :class="`indigo--text`" style="border: 1px dotted black;padding: 20px; font-size:16px;">
    <slot name="header" />
    <h1 :class="`black--text`" style="font-size:16px;">
      <slot></slot>
    </h1>
  </center>
</template>
