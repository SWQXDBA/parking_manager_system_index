import { Form, Input, Button, Checkbox,Row, Col,Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import React from 'react';
import 'antd/dist/antd.css';

const { Title } = Typography;

export class LoginForm extends React.Component{
     onFinish = (values: any) => {
        console.log('Success:', values);
    };

     onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <>
                <Row style = {{height:'400px'}}/>
                <Row justify="center">
                    <Col span={6} style = {{border:'1px solid black',padding:'15px'}}>
                        <Title>停车场系统-用户登录</Title>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="请输入密码"
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
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                  &nbsp; 或者 &nbsp;  <a href="">注册新账户</a>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

            </>


        );
    }

}