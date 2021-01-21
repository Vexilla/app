import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/environments",
    name: "Environments",
    component: () =>
      import(
        /* webpackChunkName: "environments" */ "../views/ManageEnvironments.vue"
      ),
  },
  {
    path: "/environment/:name",
    name: "Environment",
    component: () =>
      import(/* webpackChunkName: "environment" */ "../views/Environment.vue"),
  },
  {
    path: "/features",
    name: "Features",
    component: () =>
      import(/* webpackChunkName: "features" */ "../views/ManageFeatures.vue"),
  },
  {
    path: "/feature/:name",
    name: "Feature",
    component: () =>
      import(/* webpackChunkName: "feature" */ "../views/Feature.vue"),
  },
  {
    path: "/configuration",
    name: "Configuration",
    component: () =>
      import(
        /* webpackChunkName: "configuration" */ "../views/Configuration.vue"
      ),
  },
];

// process.env.BASE_URL = "/";

let history;

if (process.env.NODE_ENV === "production") {
  history = createWebHistory("/");
} else {
  history = createWebHistory(process.env.BASE_URL);
}

const router = createRouter({
  history,
  routes,
});

export default router;
