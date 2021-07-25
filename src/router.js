import Vue from "vue";
import Router from "vue-router";
import Main from "./components/pages/Main.vue";
import Main2 from "./components/pages/Main2.vue";
import Mypage from "./components/pages/Mypage.vue";

Vue.use(Router);

export default new Router({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/search",
      name: "search",
      component: Main2,
    },
    {
      path: "/mypage",
      name: "mypage",
      component: Mypage,
    },
  ],
});
