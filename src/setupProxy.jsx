
import {ipConfig} from "./configs/ipConfigs";
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/user/login',
        createProxyMiddleware({ //遇见/api1前缀的请求，就会触发该代理配置
            target: ipConfig.userLogin, //请求转发给谁
            changeOrigin: true, //控制服务器收到的请求头中Host的值

        })
    )
    app.use(
        '/userRegister',
        createProxyMiddleware({ //遇见/api1前缀的请求，就会触发该代理配置
            target: ipConfig.userRegister, //请求转发给谁
            changeOrigin: true, //控制服务器收到的请求头中Host的值
            pathRewrite: {
                '^/userRegister': ''
            } //重写请求路径(必须)
        })
    )
}