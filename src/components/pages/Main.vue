<template>
  <div>
    <Header />
    <div class="main">
      <div class="content">
        <img src="../../assets/smp.jpg" class="img-fulied" />
      </div>
      <div class="content"><discription /></div>
      <div class="content"><usage /></div>
    </div>
    <div></div>
    <Footer />
  </div>
</template>

<script>
import Header from "../modules/Header.vue";
import Footer from "../modules/Footer.vue";
import Discription from "../modules/Discription.vue";
import Usage from "../modules/Usage.vue";
export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    Header,
    Footer,
    Discription,
    Usage,
  },
};
</script>

<style>
.main {
  margin-top: 80px;
}
.content {
  margin: 50px;
}
</style>
