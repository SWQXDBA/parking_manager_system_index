import React, {Component} from 'react';
import moment from "moment";
import {Button, Col, Row, Select, Space, Table} from "antd";
import axios from "axios";
import {urls} from "../../configs/urls";
import Search from "antd/es/input/Search";

class ParkingManage extends Component {
    state = {
    selectZone : 'A',
    allData:[],
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
            indexInZone: 1,
            parkState: '已出租',
        }
    ];

    columns = [
        {
            title: '车位区域',
            dataIndex: 'parkZone',
            key: 'parkZone',
            filters: [
                {
                    text: 'A',
                    value: 'A',
                },
                {
                    text: 'B',
                    value: 'B',
                },
                {
                    text: 'C',
                    value: 'C',
                },
                {
                    text: 'D',
                    value: 'D',
                }
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.parkZone===value,
            sorter: (record1, record2) => record1.idInZone - record2.idInZone,
            sortDirections: ['descend']
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
            title: '承租人',
            dataIndex: 'leaseholder',
            key: 'leaseholder',
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
                console.log (this.props.parkingManageModify)
                return <Button onClick = {()=>this.props.parkingManageModify(record.parkZone,record.indexInZone)} type = "primary"> 编辑 </Button>;
            }



        },

    ]
    onSelectChange = (value)=>{
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.selectZone = value;

    }

    selectZoneBefore = (
        <Select placeholder="区域编号" defaultValue="A" className="select-before"
                onChange={this.onSelectChange}>
            <Select.Option value="A">A</Select.Option>
            <Select.Option value="B">B</Select.Option>
            <Select.Option value ="C">C</Select.Option>
            <Select.Option value="D">D</Select.Option>
        </Select>
    );
    onSearch = (value)=>{


        const arr =this.state.allData.filter((current)=>{

            return current.parkZone == this.state.selectZone&&current.indexInZone == value
        })
        this.setState({
            data:arr
        })


    }


    fetch = () => {
        this.setState({
            loading: true
        })
        axios.post(urls.getAllParksUrl).then(response => {
            if(response.data!=null){
                const datas = response.data.map(item => {
                    return {
                        key: item.id + '',
                        parkZone: item.zone,
                        indexInZone: item.idInZone,
                        parkState: item.leaseholder == null ? '未出租' : '已出租',
                        leaseholder: item.leaseholder?.userName == null ? '' : item.leaseholder.userName,
                        startLeaseTime: item.startLeaseTime == null ? '' : item.startLeaseTime,
                        expirationTime: item.expirationTime == null ? '' : item.expirationTime
                    }
                })

                this.setState({
                    data: datas,
                    loading: false,
                    allData:datas
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
                <Row>
                    <Col>
                        <Space direction="vertical">
                            <Search
                                addonBefore={this.selectZoneBefore}
                                placeholder="区内编号"
                                allowClear
                                onSearch={this.onSearch}
                                style={{ width: 304 }}
                            />
                        </Space>
                    </Col>
                </Row>
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

export default ParkingManage;