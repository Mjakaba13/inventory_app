import { createRouter, createWebHistory } from "vue-router";
import SignupView from "../views/SignupView.vue";
import DashboardView from "@/views/DashBoard.vue";
import InventoryView from "@/views/InventoryView.vue";

const routes = [
  {
    path: "/",
    name: "Signup",
    component: SignupView,
  },
  {
    path: "/login",
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
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: InventoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
