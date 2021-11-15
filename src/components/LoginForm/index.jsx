import {Button, Checkbox, Col, Form, Input, Row, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';

import React from 'react';
import 'antd/dist/antd.css';
import axios from "axios";
const {Title} = Typography;

export class LoginForm extends React.Component {
    state = {
        userName: '',
        passWord: ''
    }


    onFill = () => {
        axios.post('http://localhost:8080',this.state).then(response=>{
            console.log(response.data)
        })

    };
    onFinish = (values: any) => {
        console.log('Success:', values);
    };
    onUserNameChange = (event) => {
        const userName = event.target.value;
        this.setState({userName})
    }
    onPassWordChange = (event) => {
        const passWord = event.target.value;
        this.setState({passWord})
    }
    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <>

                <Row>
                    <Col span={24} justify="center" style={{marginTop: '300px'}}>
                        <Row justify="center">
                            <Col span={6} style={{border: '1px solid black', padding: '15px'}}>
                                <Title>停车场系统-用户登录</Title>
                                <Form
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{remember: true}}
                                    onFinish={this.onFinish}
                                    onFinishFailed={this.onFinishFailed}
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[{required: true, message: 'Please input your Username!'}]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                               placeholder="请输入用户名" onChange={this.onUserNameChange}/>
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{required: true, message: 'Please input your Password!'}]}
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon"/>}
                                            type="password"
                                            placeholder="请输入密码" onChange = {this.onPassWordChange}
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
                                        &nbsp; 或者 &nbsp;  <a href="">注册新账户</a>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </>


        );
    }

}