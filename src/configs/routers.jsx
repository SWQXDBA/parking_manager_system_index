import {LoginForm} from "../components/LoginForm";
import {UserCenter} from "../components/UserCenter";
export const routerPaths = {
    userLogin: '/login',
    userCenter:'/userCenter'
}

export  const routers = [
    {
        path:routerPaths.userLogin,
        element:<LoginForm/>
    },
    {
        path:routerPaths.userCenter,
        element:<UserCenter/>
    }
]


