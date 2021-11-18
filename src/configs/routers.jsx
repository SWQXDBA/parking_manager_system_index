
import {UserMenu} from "../components/UserMenu";
import {UserLogin} from "../components/UserLogin";
import {AdminLogin} from "../components/AdminLogin";
export const routerPaths = {
    userLogin: '/userLogin',
    userMenu:'/userMenu',
    adminLogin:'/adminLogin'
}

export  const routers = [
    {
        path:routerPaths.userLogin,
        component:UserLogin
    },
    {
        path:routerPaths.userMenu,
        component:UserMenu
    },
    {
        path:routerPaths.adminLogin,
        component:AdminLogin
    }
]


