<template>
  <div>
    <h3>ご利用方法</h3>
    <div class="cont">
      <b-card-group>
        <b-card title="1.入力" class="card">
          <b-card-text>
            レンタルしたい品名、届けてほしい場所、払える金額を入力して、
            レンタルしてくれる人が現れるのを待つ。
          </b-card-text>
        </b-card>

        <b-card title="2.受け取る" class="card">
          <b-card-text>
            配達が完了すると通知が届くので、指定のコインロッカーに品物を受け取りに行く。
          </b-card-text>
        </b-card>

        <b-card title="3.返却" class="card">
          <b-card-text>
            使い終わったら、受け取ったコインロッカーと同じコインロッカーに返却。
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Usage",
};
</script>

<style>
.card {
  margin: 20px;
}
</style>