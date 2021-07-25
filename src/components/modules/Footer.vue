<template>
  <div class="footer_contents">
    <div class="footer_logo">Shere Pocket 4D</div>
    <div class="menu">利用規約</div>
    <div id="credit">©2021 one_milli_ampere</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer_contents {
  color: #fff;
  background-color: black;
  height: 270px;
}
.footer_logo {
  margin: 10px;
  font-size: 32px;
  float: left;
}
.menu {
  margin: 30px;
  float: right;
}
#credit {
  position: relative;
  float: right;
  top: 240px;
  left: 100px;
}
</style>