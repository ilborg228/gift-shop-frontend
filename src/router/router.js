import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import About from "@/pages/About";
import Store from "@/pages/Store";
import Contacts from "@/pages/Contacts";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/store',
        component: Store
    },
    {
        path: '/contacts',
        component: Contacts
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;