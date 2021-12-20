import React, {Component} from 'react';
import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";
import Title from "antd/es/typography/Title";
import {LockOutlined} from "@ant-design/icons";

class ParkingEdit extends Component {
    state = {
        startRentTime:null,
        endRentTime:null,
        userName:null,
        parkingState:null
    }
    onChange = (str,value)=>{
        if(str==='起始时间'){
            this.setState({
                startRentTime:value
            })
        }else if(str==='到期时间'){
            this.setState({
                endRentTime:value
            })
        }
        else if(str==='承租用户名'){
            this.setState({
                userName:value
            })
        } else if(str==='车位状态'){
            this.setState({
                parkingState:value
            })
        }

    }
    render() {
        const {zone,idInZone} = this.props
        return (
            <>
                <Row>
                    <Title> 您要修改的车位是{zone}区{idInZone}号车位</Title>
                </Row>
                <Row>
                    <Col offset = {4} span = {12}>
                        <Form
                            labelCol={{ span: 15 }}
                            wrapperCol={{ span: 300 }}
                            layout="horizontal"
                        >
                            <Form.Item label="车位状态">
                                <Select onChange={value => this.onChange('车位状态',value)}>
                                    <Select.Option value="rented">已出租</Select.Option>
                                    <Select.Option value="unRented">空闲</Select.Option>
                                    <Select.Option value="used">已占用</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="承租用户名">

                                <Input placeholder="承租用户名"
                                       onChange={value => this.onChange('承租用户名',value)}/>
                            </Form.Item>

                            <Form.Item label="起始时间">
                                <DatePicker
                                    placeholder = "选择日期"
                                    style={{width:'100px'}}
                                    format="YYYY-MM-DD"
                                    disabledDate={this.disabledDateStart}
                                    onChange = {(value)=>this.onChange('起始时间',value)}
                                />
                            </Form.Item>
                            <Form.Item label="到期时间">

                                <DatePicker
                                    placeholder = "选择日期"
                                    style={{width:'100px'}}
                                    format="YYYY-MM-DD"
                                    disabledDate={this.disabledDateEnd}
                                    onChange = {(value)=>this.onChange('到期时间',value)}

                                />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
                                <Button type="submit" htmlType="button" onClick={this.submit}>
                                    提交修改
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>

                </Row>

            </>
        );
    }
}

export default ParkingEdit;