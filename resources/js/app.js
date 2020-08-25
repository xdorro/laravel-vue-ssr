/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require("./bootstrap");

// global.Vue = require("vue");
import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./components/App";

export default new Vue({
    store,

    router,

    render: h => h(App)
});
