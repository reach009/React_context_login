// In this file, we will define all the routes we want to have in this application

import React from "react";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";

const routes = [
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: "/home",
    component: Home,
    isPrivate: true,
  },
  {
    path: "/*",
    component: PageNotFound,
    isPrivate: true,
  },
];

export default routes;
