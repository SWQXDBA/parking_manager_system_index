import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from "axios";
import {urls} from "../../configs/urls";
import Title from "antd/es/typography/Title";

class DataStatistics extends Component {
    state = {
        rented:10,
        allCount:20,
        occupy:0
    };
    fetch = () => {

        axios.post(urls.getAllParksUrl).then(response => {
            if(response.data!=null){
                let rented = 0;
                let allCount = response.data.length;
                let occupy = 0
                response.data.forEach(item=>{
                    if(item.parkingState=='OCCUPY'){
                        occupy++
                    }else if(item.leaseholder != null||item.parkingState=='RENTED'){
                        rented++;
                    }
                })

                this.setState({
                    rented,allCount,occupy
                })
            }


        })
    }
    componentDidMount() {
        //  this.state.data = this.dataSource
        this.fetch();
    }
    getOption = ()=>{
        const {rented,allCount,occupy} = this.state
        return {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '车位统计',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: rented, name: '已使用'},
                        {value: allCount-rented, name: '空闲'},
                        {value: occupy, name: '已占用'}
                    ]
                }
            ]
        };
    };

    render() {
        const {rented,allCount,occupy}= this.state
        return (
            <div>
                <ReactEcharts option = {this.getOption()}/>
                <Title level = {5}>总车位:{allCount} 未出租: {allCount-rented} 已出租:{rented} 已占用:{occupy}</Title>
            </div>
        );
    }
}

export default DataStatistics;