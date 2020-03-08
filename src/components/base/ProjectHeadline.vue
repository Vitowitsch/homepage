<template>
  <p>
    <center>
      <div class="headline">
        <p>
          <span>
            <slot name="header" />
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
  margin-bottom: 20px;
  margin-top: 10px;
  font: 12px "PT Sans", sans-serif;
  line-height: 20px;
  text-align: center;
}

.headline p span {
  padding: 0 10px;
  background-color: #fff;
}

.headline h1 {
  padding: 10px 15px;
  margin-bottom: 0;
  text-transform: uppercase;
  line-height: 53px;
}

h1 {
  margin-bottom: 14px;
  font-size: 36px;
  line-height: 57px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
  font-weight: normal;
}

element.style {
  text-align: justify;
  line-height: 18px;
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
