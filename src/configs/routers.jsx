
import {UserMenu} from "../components/UserMenu";
import {LoginForm} from "../components/LoginForm";
export const routerPaths = {
    userLogin: '/userLogin',
    userMenu:'/userMenu'
}

export  const routers = [
    {
        path:routerPaths.userLogin,
        component:LoginForm
    },
    {
        path:routerPaths.userMenu,
        component:UserMenu
    }
]


