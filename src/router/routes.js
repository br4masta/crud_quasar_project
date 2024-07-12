const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/table",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/tableComponent.vue") },
      { path: "addProject", component: () => import("pages/addProject.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
