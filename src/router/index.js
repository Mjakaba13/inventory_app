import { createRouter, createWebHistory } from "vue-router";
import jwt_decode from "jwt-decode";

import SignupView from "../views/SignupView.vue";
import DashboardView from "@/views/DashBoard.vue";
import InventoryView from "@/views/InventoryView.vue";
import AccountView from "@/views/AccountSetting.vue";

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: SignupView,
  },
  {
    path: "/",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: InventoryView,
    meta: { requiresAuth: true },
  },
  {
    path: "/accountsetting",
    name: "Account",
    component: AccountView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const token = localStorage.getItem("id");
  let loggedIn = false;
  if (token) {
    // const decoded = jwt_decode(token);
    // const expiryDate = new Date(decoded.exp * 1000);
    // const now = new Date();
    // if (now < expiryDate)
    loggedIn = true;
  }
  if (to.meta.requiresAuth && !loggedIn) {
    return "/";
  }

  // return true or nothing: navigation is valid
  // return false: breaks navigation
  // return route: redirects to that route
});

export default router;
