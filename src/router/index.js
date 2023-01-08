import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "../views/Register.vue"
import Single from "../views/SinglePost.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter(to, from, next) {
        if (!localStorage.getItem("token") && !localStorage.getItem("id")) {
          window.location.href = "/register"
        } else {
          next()
        }
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/single/:id",
      name: "single",
      component: Single,
    }
  ]
})

export default router
