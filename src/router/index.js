import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/views/CheckoutView.vue"),
  },
  {
    path: "*",
    redirect: "/checkout",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
