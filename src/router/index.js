
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';
import AdminProductAddView from '../views/AdminProductAddView.vue';

const routes = [
    { path: "/", name: "home", component: HomeView },
    { path: "/admin/products", name: "admin", component: AdminView },
    { path: "/admin/products/add", name: "admin-add", component: AdminProductAddView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;