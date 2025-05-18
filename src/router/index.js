import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUp from '../views/SignUp.vue'
import ContactUs from '../views/ContactUs.vue'
import Application from '../views/Scholarships.vue'
import Scholarships from '../views/Scholarships.vue'
import STEMPage from '@/views/STEMPage.vue'
import ArtsPage from '@/views/ArtsPage.vue'
import HealthPage from '@/views/HealthPage.vue'
import InternationalPage from '@/views/InternationalPage.vue'
import BusinessPage from '@/views/BusinessPage.vue'
import StemApplication from '@/views/StemApplication.vue'
import InternationalApplication from '@/views/InternationalApplication.vue'
import BusinessApplication from '@/views/BusinessApplication.vue'
import ArtsApplication from '@/views/ArtsApplication.vue'
import HealthApplication from '@/views/HealthApplication.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
          
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp

    },
    {
       path: '/contact',
       name: 'Contact',
      component: ContactUs
    },
    {
      path: '/scholarships',
      name: 'Scholarships',
      component: Scholarships
    },
    {
      path: '/stem',
      name: 'STEM',
      component: STEMPage
    },
    
    {
      path: '/arts',
      name: 'Arts',
      component: ArtsPage
    },
    {
      path: '/health',
      name: 'Health',
      component: HealthPage

    },
    {
      path: '/international',
      name: 'International',
      component: InternationalPage
    },
     {
      path: '/business',
      name: 'Business',
      component: BusinessPage
     },
     {
      path: '/stemapply',
      name: 'StemApplication',
      component: StemApplication
     },
     {
      path: '/internationalapply',
      name: 'InternationalApply',
      component: InternationalApplication
     },
      {
      path: '/businessapply',
      name: 'BusinessApplication',
      component: BusinessApplication
     },
     {
      path: '/artsapply',
      name: 'ArtsApplication',
      component: ArtsApplication
     },
     {
      path: '/healthapply',
      name: 'HealthApplication',
      component: HealthApplication
     },

     
  ],
})

export default router
