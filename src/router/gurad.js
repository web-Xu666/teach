import router from "./index";
import { getToken } from "@/utils/auth";
import asyncRoutes from "./asyncRouterMap"

import store from "@/store"
router.beforeEach(async (to, from, next) => {
    console.log("导航守卫触发了")
    const hasToken = getToken();
    if (hasToken) {
        await store.dispatch("getRole")

        if (to.path == "/login") {
            next("/")
        } else {
            console.log(22222222,to.name)
            //如果要跳转的页面不存在，就动态添加路由
            if (to.name == null) {
                let f=asyncRoutes.filter(item=>item.meta.auth.includes(store.state.role));
                for (let i = 0; i < f.length; i++) {
                    router.addRoute(f[i])
                }
                //如果参数to不能找到对应的路由的话，就再执行一次beforeEach((to, from, next)直到其中的next({ …to})能找到对应的路由为止。
                next({ ...to, replace: true })
            } else {
                next()
            }

        }

    } else {
        if (to.path == "/login") {
            next()
        } else (
            next("/login")
        )
    }
})