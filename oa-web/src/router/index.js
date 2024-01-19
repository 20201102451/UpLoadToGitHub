import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/Layout.vue'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      }, {
        path: 'meeting',
        name: 'Meeting',
        component: () => import('../views/Meeting/Meeting.vue')
      }, {
        path: 'friends',
        name: 'Friends',
        component: () => import('../views/Friends/Friends.vue')
      }, {
        path: 'report',
        name: 'Report',
        component: () => import('../views/Report/MyReport.vue'),
      }, {
        path: 'pendingreport',
        name: 'PendingReport',
        component: () => import('../views/Report/PendingReport.vue')
      },
      {
        path: 'attendance',
        name: 'Attendance',
        component: () => import('../views/Attendance/Attendance.vue')
      },
      {
        path: 'absentList',
        name: 'absentList',
        component: () => import('../views/Attendance/AbsentList.vue')
      },
      {
        path: 'compareAttendance',
        name: 'compareAttendance',
        component: () => import('../views/Attendance/CompareAttendance.vue')
      },
      {
        path: 'employeeAttendance',
        name: 'employeeAttendance',
        component: () => import('../views/Attendance/EmployeeAttendance.vue')
      },
      {
        path: 'departmentAttendance',
        name: 'departmentAttendance',
        component: () => import('../views/Attendance/DepartmentAttendance.vue')
      },
      {
        path: 'examineAndApprove',
        name: 'ExamineAndApprove',
        component: () => import('../views/ExamineAndApprove/ExamineAndApprove.vue'),
        children: [
          {
            path: 'apply',
            name: 'Apply',
            component: () => import('../views/ExamineAndApprove/Apply.vue')
          }, {
            path: 'applicationRecord',
            name: 'ApplicationRecord',
            component: () => import('../views/ExamineAndApprove/ApplicationRecord.vue')
          }, {
            path: 'pending',
            name: 'Pending',
            component: () => import('../views/ExamineAndApprove/Pending.vue')
          }, {
            path: 'pendingRecord',
            name: 'PendingRecord',
            component: () => import('../views/ExamineAndApprove/PendingRecord.vue')
          }
        ]
      }, {
        path: 'department',
        name: 'Department',
        component: () => import('../views/Department/Department.vue')
      },
      {
        path: 'empManage',
        name: 'empManage',
        component: () => import('../views/Department/EmpManage.vue')
      },
      {
        path: 'auxiliary',
        name: 'Auxiliary',
        component: () => import('../views/Auxiliary/Auxiliary.vue')
      }, {
        path: 'documentManage',
        name: 'DocumentManage',
        component: () => import('../views/DocumentManage/DocumentManage.vue')
      }, {
        path: 'admin',
        name: 'Admin',
        component: () => import('../views/Admin/Admin.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
