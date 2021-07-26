<template>
  <div>
    <header-2 />
    <div class="main"><h3>@guest3</h3></div>
    <Footer />
  </div>
</template>

<script>
import Header2 from "../modules/Header2.vue";
import Footer from "../modules/Footer.vue";
export default {
  name: "Main2",
  components: {
    Header2,
    Footer,
  },
};
</script>
