
import {UserMenu} from "../components/UserMenu";
import {UserLogin} from "../components/UserLogin";
import {AdminLogin} from "../components/AdminLogin";
import {AdminMenu} from "../components/AdminMenu";
export const routerPaths = {
    userLogin: '/userLogin',
    userMenu:'/userMenu',
    adminLogin:'/adminLogin',
    adminMenu:'/adminMenu'
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
    },
    {
        path:routerPaths.adminMenu,
        component:AdminMenu
    }
]


