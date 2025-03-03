import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegistrationView.vue'
import MainView from '../views/MainView.vue'

import AuthView from '../views/auth/AuthView.vue'
const routes = [
  {
    path: '/',
    name: 'main',
    redirect:'/home',
    component: MainView,
    children:[
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/auth',
        name: 'auth',
        component: AuthView,
        children: [
          {
            path: '/login',
            name: 'login',
            component: LoginView
          },
          {
            path: '/register',
            name: 'register',
            component: RegisterView
          },
       
        ]
      },
      {
        path: '/user-profile',
        name: 'userProfile',
        component:() => import('../views/user/UserProfileView.vue')
      },
      
    

    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/AdminView.vue'),
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: ()=>import('../views/admin/components/DashBoardView.vue')
      },
      {
        path: '/faculty',
        name: 'faculty',
        component: ()=>import('../views/admin/components/FacultyView.vue')
      },
      {
        path: '/report',
        name: 'report',
        component: ()=>import('../views/admin/components/ReportView.vue')
      },
    ]
   
  },
  
 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
