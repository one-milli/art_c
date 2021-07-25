<template>
  <div>
    <header-2 />
    <div class="main">
      <div class="content">
        <h3>レンタル依頼を出す</h3>
        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label"
              >借りたいもの</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="品名を入力"
                v-model="newItemName"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label"
              >レンタル金額(円/15分)</label
            >
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                placeholder="金額を入力"
                v-model="newItemPrice"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label"
              >届けてほしい駅</label
            >
            <div class="col-sm-10">
              <select class="custom-select" v-model="newItemStation">
                <option disabled value="">駅名を選択</option>
                <option v-for="st in stations" :key="st.name">
                  {{ st.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10 offset-sm-2">
              <button type="button" class="btn btn-primary" @click="addItem">
                依頼を出す
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="content">
        <h3>貸出する</h3>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            v-model="keyword"
          />
          <div class="input-group-append">
            <button class="btn btn-success" type="button">検索</button>
          </div>
        </div>
        <!-- <div>
          <span>駅名: </span>
          <span v-for="st in stations" :key="st.name">
            <label>
              <input
                type="checkbox"
                v-bind:value="st.name"
                v-model="selectStations"
              />{{ st.name }}</label
            >
          </span>
        </div> -->
        <div>
          <table>
            <thead>
              <tr>
                <th>品名</th>
                <th>レンタル料(円/15分)</th>
                <th>駅名</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.name">
                <td>
                  <a @click="openModal(item)">{{ item.name }}</a>
                </td>
                <td>{{ item.price }}</td>
                <td>{{ item.station }}</td>
                <modal
                  :val="postItem"
                  v-show="showContent"
                  @close="closeModal"
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header2 from "../modules/Header2.vue";
import Footer from "../modules/Footer.vue";
import Modal from "../modules/Modal.vue";
export default {
  name: "Main2",
  components: {
    Header2,
    Footer,
    Modal,
  },
  data() {
    return {
      items: [
        {
          name: "モバイルバッテリー",
          price: 100,
          station: "東京駅",
          cont: "hogehoge10",
        },
        { name: "はさみ", price: 10, station: "渋谷駅", cont: "fuga_yama" },
        {
          name: "『ワンピース』1巻~5巻",
          price: 50,
          station: "大岡山駅",
          cont: "piyochan2",
        },
        {
          name: "大乱闘スマッシュブラザーズSPECIAL",
          price: 80,
          station: "新宿",
          cont: "piyochan2",
        },
        {
          name: "マキシマムザホルモン『予襲復讐』",
          price: 20,
          station: "すずかけ台駅",
          cont: "rockers777",
        },
        {
          name: "甚平 身長170cm男性用",
          price: "200",
          station: "浅草駅",
          cont: "hogehoge10",
        },
      ],
      newItemName: "",
      newItemPrice: 0,
      newItemStation: "",
      stations: [
        { name: "浅草駅" },
        { name: "上野駅" },
        { name: "大岡山駅" },
        { name: "渋谷駅" },
        { name: "新宿駅" },
        { name: "すずかけ台駅" },
        { name: "東京駅" },
      ],
      keyword: "",
      showContent: false,
      postItem: "",
      selectStations: "",
    };
  },
  computed: {
    filteredItems: function () {
      var items = [];
      for (var i in this.items) {
        var item = this.items[i];
        if (item.name.indexOf(this.keyword) !== -1) {
          items.push(item);
        }
      }
      return items;
    },
  },
  methods: {
    addItem() {
      this.items.push({
        name: this.newItemName,
        price: this.newItemPrice,
        station: this.newItemStation,
        cont: "guest1",
      });
      this.newItemName = "";
      this.newItemPrice = 0;
    },
    openModal(item) {
      this.showContent = true;
      this.postItem = item;
    },
    closeModal() {
      this.showContent = false;
    },
  },
};
</script>

<style>
.form-group {
  margin: 10px;
}
table {
  margin: 0 auto;
}
</style>