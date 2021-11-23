
import {UserMenu} from "../components/UserMenu";
import {UserLogin} from "../components/UserLogin";
import {AdminLogin} from "../components/AdminLogin";
import {AdminMenu} from "../components/AdminMenu";
import {UserRegister} from "../components/UserRegister";
export const routerPaths = {
    userLogin: '/userLogin',
    userRegister: '/userRegister',
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
        path:routerPaths.userRegister,
        component:UserRegister
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


