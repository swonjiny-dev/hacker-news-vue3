import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import NewestView from "../views/NewestView";
import NewsView from "../views/NewsView";
import ShowView from "../views/ShowView";

Vue.use(VueRouter);

export const router =  new VueRouter({
    mode: 'history',
    routes: [
        {
            path : '/',
            redirect :'/news/1'
        },
        {
            path : '/news/:page',
            component : NewsView,
        },
        {
            path : '/newest',
            component : NewestView,
        },
        {
            path : '/ask',
            component : AskView,
        },
        {
            path : '/jobs',
            component : JobsView,
        },
        {
            path : '/show',
            component : ShowView,
        },
    ]
})