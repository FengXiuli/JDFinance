import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import Rais from "../raise/index.vue"
import Download from "../special/download.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
        	path: "/money",
        	name: "money",
        	component: Money,

        },
        {
            path: "/ious",
            name: "ious",
            component: Ious,

        },
        {
            path: "/raise",
            name: "raise",
            component: Rais,

        },
        {
            path: "/download",
            name: "download",
            component: Download,

        },
    ],
})
