import { createRouter, createWebHistory } from 'vue-router';

import LogIn from "./views/LogIn"
import WelcomeScreen from "./views/WelcomeScreen"
import ErrorScreen from "./views/ErrorScreen"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: LogIn},
        {path: '/welcome', component: WelcomeScreen},
        {path:'/:404(.*)', component: ErrorScreen}
    ]
})

export default router;