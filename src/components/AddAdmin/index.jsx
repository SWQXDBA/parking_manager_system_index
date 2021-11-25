import {Button, Checkbox, Col, Form, Input, Row, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {routerPaths} from "../../configs/routers";
import React from 'react';
import 'antd/dist/antd.css';
import axios from "axios";
import {urls} from "../../configs/urls";



const {Title} = Typography;

export class AddAdmin extends React.Component {
    state = {
        userName: '',
        password: ''
    }


    onFill = () => {
        if(this.state.userName===''||this.state.password===''){
            alert('用户名和密码不能为空!')
            return
        }

        axios.post(urls.adminAddAdminUrl, this.state).then(response => {
            const {data} = response
            alert(data.msg)
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

                <Row justify="center" align = "top" style = {{height:'600px'}}>
                    <Col span={18} style={{border: '1px solid black', padding: '15px'}}>
                        <Title>停车场系统-添加管理员</Title>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{remember: true}}

                        >
                            <Form.Item
                                name="username"
                                rules={[{required: true, message: '请输入管理员用户名!'}]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                       placeholder="请输入管理员用户名" onChange={this.onUserNameChange}/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{required: true, message: '请输入管理员密码!'}]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="请输入管理员密码" onChange={this.onPassWordChange}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        onClick={this.onFill}>
                                    添加
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

            </>


        );
    }

}
