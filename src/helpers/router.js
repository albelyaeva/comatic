import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '@/components/RegisterPage';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'Registration',
        component: RegisterPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})

export default router;