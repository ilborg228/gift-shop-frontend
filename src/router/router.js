import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import About from "@/pages/About";
import Store from "@/pages/Store";
import Contacts from "@/pages/Contacts";
import Admin from "@/pages/Admin";
import Products from "@/pages/Products";
import ItemPage from "@/pages/ItemPage";

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
    },
    {
        path:'/admin',
        component: Admin
    },
    {
        path:'/product/:categoryName',
        component: Products
    },
    {
        path:'/product/:id',
        component: ItemPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;