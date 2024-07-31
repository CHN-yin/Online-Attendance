import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import {
  CopyOutlined,
  CalendarOutlined,
  WarningOutlined,
  FileAddOutlined,
  ScheduleOutlined
} from '@ant-design/icons';

const Home = lazy(() => import("../pages/home/Home"))
const Apply = lazy(() => import("../pages/apply/Apply"))
const Check = lazy(() => import("../pages/check/Check"))
const Exception = lazy(() => import("../pages/exception/Exception"))
const Login = lazy(() => import("../pages/login/Login"))
const Sign = lazy(() => import("../pages/sign/Sign"))
const BeforeEach = lazy(() => import("../components/BeforeEach/BeforeEach"))

declare module 'react-router' {
  interface IndexRouteObject {
    mate?: { title?: string, menu?: boolean, icon?: React.ReactNode, auth?: boolean }
  }
  interface NonIndexRouteObject {
    mate?: { title?: string, menu?: boolean, icon?: React.ReactNode, auth?: boolean }
  }
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(BeforeEach, null, React.createElement(Home)),
    mate: {
      menu: true,
      title: '考勤管理',
      icon: React.createElement(CopyOutlined),
      auth: true
    },
    children: [
      {
        path: 'sign',
        element: React.createElement(Sign),
        mate: {
          menu: true,
          title: '在线打卡签到',
          icon: React.createElement(CalendarOutlined),
          auth: true
        }
      },
      {
        path: 'apply',
        element: React.createElement(Apply),
        mate: {
          menu: true,
          title: '添加考勤审批',
          icon: React.createElement(FileAddOutlined),
          auth: true
        }
      },
      {
        path: 'check',
        element: React.createElement(Check),
        mate: {
          menu: true,
          title: '我的考勤审批',
          icon: React.createElement(ScheduleOutlined),
          auth: true
        }
      },
      {
        path: 'exception',
        element: React.createElement(Exception),
        mate: {
          menu: true,
          title: '异常考勤查询',
          icon: React.createElement(WarningOutlined),
          auth: true
        }
      },
    ]
  },
  {
    path: '/login',
    element: React.createElement(BeforeEach, null, React.createElement(Login)),
  }
]

const router = createBrowserRouter(routes)

export default router