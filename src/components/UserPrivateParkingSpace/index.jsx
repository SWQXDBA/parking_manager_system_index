import React, {Component} from 'react';
import axios from "axios";
import {urls} from "../../configs/urls";
import {Table} from "antd";

export class UserPrivateParkingSpace extends Component {
    state = {
        data: [],
        pagination: {
            defaultCurrent: 1,
            defaultPageSize: 8,
            showSizeChanger: false
        },
        loading: false,
    };

         dataSource = [
            {
                key: '1',
                parkZone: 'A',
                indexInZone: 1
            }
        ];

    columns = [
        {
            title: '车位区域',
            dataIndex: 'parkZone',
            key: 'parkZone',
        },
        {
            title: '区内编号',
            dataIndex: 'indexInZone',
            key: 'indexInZone',
        }, {
            title: '起租时间',
            dataIndex: 'startLeaseTime',
            key: 'startLeaseTime',
        },
        {
            title: '到期时间',
            dataIndex: 'expirationTime',
            key: 'expirationTime',
        },
    ];
    fetch = () => {
        this.setState({
            loading: true
        })
        axios.post(urls.getPrivateParkingSpaceUrl).then(response => {
            const datas = response.data.map(item => {
                return {
                    key: item.id + '',
                    parkZone: item.zone,
                    indexInZone: item.idInZone,
                    startLeaseTime:item.startLeaseTime==null?'':item.startLeaseTime,
                    expirationTime:item.expirationTime==null?'':item.expirationTime
                }
            })
            this.setState({
                data: datas,
                loading: false
            })
        })
    }

    componentDidMount() {
        this.state.data = this.dataSource
       // this.fetch();
    }

    handleTableChange = (pagination, filters, sorter) => {//每次换页重新加载全部数据很蠢 懒得在后端分页了
        this.fetch();
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

export default UserPrivateParkingSpace;