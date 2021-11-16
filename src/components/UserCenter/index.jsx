import React, {Component} from 'react';
import {Header} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

export class UserCenter extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Title>尊敬的{this.props.userName}业主您好</Title>
            </div>
        );
    }
}

