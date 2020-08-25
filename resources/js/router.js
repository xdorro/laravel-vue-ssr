import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import User from "./components/User";
// const Home = () => import('./components/Home.vue');
// const User = () => import('./components/User.vue');

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/user",
        name: "User",
        component: User
    }
];

export default new VueRouter({
    mode: "history",
    routes
});
