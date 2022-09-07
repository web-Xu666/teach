export default [
    {
        path: "/attendance",
        name: "Attendance",
        meta: { auth: ["boss","administrative"] },
        component: () => import("@/views/AuthView/AuthAttendance")
    },
    {
        path: "/salary",
        name: "Salary",
        meta: { auth: ["finance", "boss"] },
        component: () => import("@/views/AuthView/AuthSalary")
    },
    {
        path: "*",
        name: "NotFound",
        meta: { auth: ["finance", "boss", "user","administrative"] },
        component: () => import("@/views/NotFound")
    }
]