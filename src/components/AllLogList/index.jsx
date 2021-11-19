import React, {Component} from 'react';
import {Button, Table} from "antd";
import axios from "axios";
import {urls} from "../../configs/urls";
import moment from "moment";

export class AllLogList extends Component {
    state = {
        data: [],
        pagination: {
            defaultCurrent: 1,
            defaultPageSize: 4,
            showSizeChanger: false
        },
        loading: false,
    };

    dataSource = [
        {
            key: '1',
        }
    ];

    columns = [
        {
            title: '操作者',
            dataIndex: 'adminUser',
            key: 'adminUser',
        },
        {
            title: '信息',
            dataIndex: 'logData',
            key: 'logData',
        },
        {
            title: '处理时间',
            dataIndex: 'createTime',
            key: 'createTime',
        }
    ]



    fetch = () => {
        this.setState({
            loading: true
        })
        axios.post(urls.adminGetAllOptionLogUrl).then(response => {
            if(response.data.code!==200){
                alert(response.data.msg)
                this.setState({
                    loading: false
                })
            }else{

                const datas = response.data.data.map(item => {

                    return {
                        key: item.data,
                        adminUser:item.adminUser,
                        logData:item.data,
                        createTime:item.createTime
                    }
                })
                this.setState({
                    data: datas,
                    loading: false
                })
            }



        })
    }

    componentDidMount() {
        //  this.state.data = this.dataSource
        this.fetch();
    }

    handleTableChange = (pagination, filters, sorter) => {//每次换页重新加载全部数据很蠢 懒得在后端分页了
        // this.fetch();
    };


    render() {
        const {data, pagination, loading} = this.state;
        return (
            <div>
                <Table dataSource={data}
                       columns={this.columns}
                       bordered={true}
                       pagination={pagination}
                       onChange={this.handleTableChange}
                       loading={loading}
                />
            </div>
        );
    }
}

