import {Button, Checkbox, Col, Form, Input, Row, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {routerPaths} from "../../configs/routers";
import React from 'react';
import 'antd/dist/antd.css';
import axios from "axios";
import {urls} from "../../configs/urls";



const {Title} = Typography;

export class UserRegister extends React.Component {
    state = {
        userName: '',
        password: '',
        password2:''
    }
    onPassWord2Change  = (event) => {
        const password2 = event.target.value;
        this.setState({password2})
    }

    onFill = () => {
        const {userName,password,password2} = this.state
        if(password!==password2){
            alert('两次输入的密码不一致!')
            return
        }

        axios.post(urls.userRegisterUrl, {
            userName: userName,
            password: password
        }).then(response => {
            const {data} = response
            if(data.code ===200){
                alert(data.msg+'点击确认前往登录')
                this.props.history.push(routerPaths.userLogin)
            }else{
                alert(data.msg)
            }

        })

    };

    onUserNameChange = (event) => {
        const userName = event.target.value;
        this.setState({userName})
    }
    onPassWordChange = (event) => {
        const password = event.target.value;
        this.setState({password})
    }


    render() {
        return (
            <>

                <Row justify="center" align = "middle" style = {{height:'600px'}}>
                    <Col span={6} style={{border: '1px solid black', padding: '15px'}}>
                        <Title>停车场系统-用户注册</Title>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{remember: true}}

                        >
                            <Form.Item
                                name="username"
                                rules={[{required: true, message: '请输入你的用户名!'}]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                       placeholder="请输入用户名" onChange={this.onUserNameChange}/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{required: true, message: '请输入你的密码!'}]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="请输入密码" onChange={this.onPassWordChange}
                                />
                            </Form.Item>
                            <Form.Item
                                name="password2"
                                rules={[{required: true, message: '请再次输入你的密码!'}]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="请再次输入密码" onChange={this.onPassWord2Change}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>记住密码</Checkbox>
                                </Form.Item>
                            </Form.Item>


                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        onClick={this.onFill}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

            </>


        );
    }

}
