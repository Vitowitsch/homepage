<template>
  <div class="box">
    <p>
      <span>
        <slot name="header"/>
      </span>
    </p>
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>
<style scoped>
.box {
  position: relative;
  display: inline-block;
  border: 1px solid #252525;
  margin-bottom: 20px;
  text-align: center;
}

.box p span {
  padding: 0 10px;
  background-color: #fff;
  line-height: 13px;
}

.box h1 {
  padding: 10px 15px;
  text-transform: uppercase;
  line-height: 53px;
  margin-bottom: 14px;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 12px;
}

element.style {
  text-align: justify;
  line-height: 18px;
}

.box p {
  position: absolute;
  top: -15px;
  right: 0;
  left: 0;
  letter-spacing: 1px;
}

p {
  margin-bottom: 20px;
}
</style>
