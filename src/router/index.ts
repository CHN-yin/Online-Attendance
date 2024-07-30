import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"))
const Apply = lazy(() => import("../pages/apply/Apply"))
const Check = lazy(() => import("../pages/check/Check"))
const Exception = lazy(() => import("../pages/exception/Exception"))
const Login = lazy(() => import("../pages/login/Login"))
const Sider = lazy(() => import("antd/es/layout/Sider"))

const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(Home),
    children: [
      {
        path: 'sign',
        element: React.createElement(Sider)
      },
      {
        path: 'apply',
        element: React.createElement(Apply)
      },
      {
        path: 'check',
        element: React.createElement(Check)
      },
      {
        path: 'exception',
        element: React.createElement(Exception)
      },
    ]
  },
  {
    path: '/login',
    element: React.createElement(Login)
  }
]

const router = createBrowserRouter(routes)

export default router