import {Button, Checkbox, Col, Form, Input, Row, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {routerPaths} from "../../configs/routers";
import React from 'react';
import 'antd/dist/antd.css';
import axios from "axios";
import {urls} from "../../configs/urls";
import './index.css'


const {Title} = Typography;

 export class UserLogin extends React.Component {
    state = {
        userName: '',
        passWord: ''
    }


    onFill = () => {
        if(this.state.userName===''||this.state.passWord===''){
            alert('用户名和密码不能为空!')
            return
        }

        axios.post(urls.userLoginUrl, this.state).then(response => {
            const {data} = response
            if(data.code ==200){
                this.props.history.push(routerPaths.userMenu, {userName:this.state.userName})
            }else{
                alert(data.msg)
            }

        })

    };
     toRegister = ()=>{
         this.props.history.push(routerPaths.userRegister)
     }
    onUserNameChange = (event) => {
        const userName = event.target.value;
        this.setState({userName})
    }
    onPassWordChange = (event) => {
        const passWord = event.target.value;
        this.setState({passWord})
    }


    render() {
        return (
            <div >
                    <Row justify="center" align = "middle" style = {{height:'40rem'}}>
                        <Col className={'dbox'} span={7} style={{border: '1px solid black', padding: '1rem'}}>
                            <Title>停车场系统-用户登录</Title>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{remember: true}}

                            >
                                <Form.Item
                                    name="username"
                                    rules={[{required: true, message: '请输入用户名!'}]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                           placeholder="请输入用户名" onChange={this.onUserNameChange}/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{required: true, message: '请输入密码!'}]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="请输入密码" onChange={this.onPassWordChange}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>记住密码</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        忘记密码？点击找回
                                    </a>
                                </Form.Item>


                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button"
                                            onClick={this.onFill}>
                                        登录
                                    </Button>
                                    &nbsp; 或者 &nbsp;  <a href="#" onClick={this.toRegister}>注册新账户</a>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>





            </div>


        );
    }

}
