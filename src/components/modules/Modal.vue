<template>
  <div id="overlay">
    <div id="content">
      <h3>{{ val.name }}</h3>
      <p>レンタル料：{{ val.price }}円/15分</p>
      <p>依頼地：{{ val.station }}</p>
      <p>依頼主:@{{ val.cont }}</p>
      <span class="buttons"
        ><b-button variant="primary" @click="$emit('close')"
          >依頼を受ける</b-button
        ></span
      >
      <span class="buttons"
        ><b-button @click="$emit('close')">閉じる</b-button></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["val"],
};
</script>

<style>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 2;
  width: 50%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
  background-color: white;
}

.buttons {
  margin: 10px;
}
</style>