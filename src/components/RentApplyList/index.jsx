import React, {Component} from 'react';
import {Button, Table} from "antd";
import axios from "axios";
import {urls} from "../../configs/urls";
import moment from "moment";

export class RentApplyList extends Component {
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
            parkZone: 'A',
            indexInZone: 1,
            parkState: '已出租',
        }
    ];

    columns = [
        {
            title: '申请编号',
            dataIndex: 'rentId',
            key: 'rentId',
        },
        {
            title: '申请用户',
            dataIndex: 'rentUserName',
            key: 'rentUserName',
        },
        {
            title: '申请起租时间',
            dataIndex: 'startRentTime',
            key: 'startRentTime',
        },

        {
            title: '申请到租时间',
            dataIndex: 'endRentTime',
            key: 'endRentTime',
        },
        {
            title: '车位区域',
            dataIndex: 'parkZone',
            key: 'parkZone',
        },
        {
            title: '区内编号',
            dataIndex: 'indexInZone',
            key: 'indexInZone',
        },
        {
            title: '车位情况',
            dataIndex: 'parkState',
            key: 'parkState',
        }, {
            title: '现承租人',
            dataIndex: 'leaseholderUserName',
            key: 'leaseholderUserName',
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
        {
            title: '操作',
            key: 'action',
            dataIndex: 'action',
            render: (text,record,index) => {
                /*             console.log('record')
                             console.log(record)*/
                return(
                    <>
                        <Button onClick = {()=>this.admitRentApply(record.rentId)} type = "primary" > 同意申请</Button>
                        <br/>
                        <Button onClick = {()=>this.adminRefuseApply(record.rentId)} danger  type = "primary" > 拒绝申请</Button>
                    </>

                );
            }


        },

    ]

    adminRefuseApply = (rentId)=>{
        axios.get(urls.adminRefuseApplyUrl,{
            params:{
                applyId:rentId
            }
        }).then(response =>{
            console.log(response.data)
            alert(response.data.msg)
            this.fetch()
        })

    }
    admitRentApply = (rentId)=>{
        axios.get(urls.adminAdmitRentApplyUrl,{
            params:{
                applyId:rentId
            }
        }).then(response =>{
            console.log(response.data)
            alert(response.data.msg)
            this.fetch()
        })

    }
    fetch = () => {
        this.setState({
            loading: true
        })
        axios.post(urls.adminGetAllRentApplyUrl).then(response => {
            if(response.data.code!==200){
                alert(response.data.msg)
                this.setState({
                    loading: false
                })
            }else{
                const datas = response.data.data.map(item => {
                    let parkState = ''
                    if(item.leaseholderUserName == null){
                        parkState = '未出租'
                    }

                    if(moment(item.expirationTime,'yyyy-MM-DD HH:mm:ss').valueOf()<moment().valueOf()){

                        parkState = '已到期'
                    }else {
                        parkState = '未到期'
                    }
                    return {
                        key: item.rentId + '',
                        rentId:item.rentId,
                        rentUserName:item.rentUserName,
                        startRentTime:item.startRentTime,
                        endRentTime:item.endRentTime,
                        parkZone: item.zone,
                        indexInZone: item.idInZone,

                        parkState:parkState,
                        leaseholderUserName: item.leaseholderUserName == null ? '' : item.leaseholderUserName,
                        startLeaseTime: item.startLeaseTime == null ? '' : item.startLeaseTime,
                        expirationTime: item.expirationTime == null ? '' : item.expirationTime
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

