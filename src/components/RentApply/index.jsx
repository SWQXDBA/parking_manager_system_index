import React, {Component} from 'react';
import {Button, Col, DatePicker, Form, Row} from "antd";
import moment from "moment";
import axios from "axios";
import {urls} from "../../configs/urls";
import Title from "antd/es/typography/Title";
const millsPerDay = 86400000
const millsPerMonth = 2592000000
const millsPerYear = 31536000000
export class RentApply extends Component {

    state = {
        startRentTime:null,
        endRentTime:null
    }
     disabledDateStart =(current) =>{


        // Can not select days before today and today
         //小于今天的 不能选
         return current && current < moment().endOf('day');
    }
    disabledDateEnd =(current)=>{
        // Can not select days before today and today

        if(this.state.startRentTime==null){
            return current && current < moment().endOf('day');
        }else{
            //小于等于开始时间的 不能选
            return current && current <= this.state.startRentTime;
        }


    }
    submit = ()=>{
        if(this.state.startRentTime==null||this.state.endRentTime==null){
            alert('数据不能为空!')
        }else{
            const {zone,idInZone} = this.props
            const {startRentTime,endRentTime} = this.state

           const data = {
               zone:zone,
               idInZone:idInZone,
               startLeaseTime:startRentTime.valueOf(),
               expirationTime:endRentTime.valueOf(),
               rentPrice:this.getPrice()
           }

           axios.post(urls.rentApply,data).then(response=>{
               alert(response.data.msg)
           })
        }
    }
    onChange = (str,value)=>{
        if(str==='起始时间'){
            this.setState({
                startRentTime:value
            })
        }else{
            this.setState({
                endRentTime:value
            })
        }

    }
    getPrice = () =>{
        let rentTimeMills = this.state.endRentTime- this.state.startRentTime// 租用的时间 毫秒
        const rentYear =Math.floor(rentTimeMills / millsPerYear)
        rentTimeMills-=rentYear*millsPerYear
        const rentMonth =Math.floor(rentTimeMills / millsPerMonth)
        rentTimeMills-=rentMonth*millsPerMonth
        const rentDay =Math.floor (rentTimeMills / millsPerDay)
        rentTimeMills-=rentDay*millsPerDay
        const price = rentYear*1000+rentMonth*100+rentDay*5
        return {
            rentYear,
            rentMonth,
            rentDay,
            price
        }
    }

    render() {

       const {zone,idInZone} = this.props


        const {price,rentDay,rentYear,rentMonth} = this.getPrice()
        return (
            <>
                <Row>
                    <Title> 您要申请租用的车位是{zone}区{idInZone}号车位</Title>
                </Row>
                <Row>
                    <Col offset = {4} span = {12}>
                        <Form
                            labelCol={{ span: 15 }}
                            wrapperCol={{ span: 300 }}
                            layout="horizontal"


                        >
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
                                    提交申请
                                </Button>
                            </Form.Item>

                        </Form>
                        <Title level = {5}>{rentYear}年,{rentMonth}月,{rentDay}天  价格:{price}元</Title>
                    </Col>

                </Row>

            </>
        );
    }
}

export default RentApply;