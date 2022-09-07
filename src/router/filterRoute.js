import asyncRoutes from "./asyncRouterMap";
import store from "@/store"

let f= asyncRoutes.filter(item=>item.meta.auth.includes(store.state.role));
console.log("999",f)