<template>
  <p>
    <center>
      <div class="headline">
        <p>
          <span>
            <slot name="header"/>
          </span>
        </p>
        <h1>
          <slot></slot>
        </h1>
      </div>
    </center>
  </p>
</template>
<style scoped>
.headline {
  position: relative;
  display: inline-block;
  border: 1px solid #252525;
  padding-left:26px;
  padding-right:26px;
  padding-top:70px;
  color: #252525;
  font: 12px "PT Sans", sans-serif;
  line-height: 20px;
  text-align: center;
  margin-top: 10px;
}

.headline p span {
  padding: 0 10px;
  background-color: #fff;
}

.headline h1 {
  padding: 10px 25px;
  margin-bottom: 0;
  text-transform: uppercase;
  line-height: 53px;
}

h1,
h6 {
  color: #252525;
  font-family: "Oswald", sans-serif;
  font-weight: normal;
}

.headline p {
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
