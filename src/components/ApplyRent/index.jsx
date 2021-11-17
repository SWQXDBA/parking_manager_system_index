import React, {Component} from 'react';
import {Button, DatePicker, Form, Row} from "antd";
import moment from "moment";

export class ApplyRent extends Component {
    state = {

    }
     disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }
    onFill = ()=>{
        this.state
    }
    render() {
       const {zone,idInZone} = this.props
        return (
            <>
                <Row>
                    您要申请租用的车位是{zone}区{idInZone}号车位
                </Row>
                <Row>
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 8 }}
                        layout="horizontal"
                        onValuesChange={onFormLayoutChange}
                    >
                        <Form.Item label="DatePicker">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="DatePicker">
                            <DatePicker
                                format="YYYY-MM-DD HH:mm:ss"
                                disabledDate={this.disabledDate}

                                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                            />
                        </Form.Item>
                        <Form.Item label="DatePicker">
                            <Button type="submit" htmlType="button" onClick={this.onFill}>
                                提交申请
                            </Button>
                        </Form.Item>

                    </Form>
                </Row>

            </>
        );
    }
}

export default Index;