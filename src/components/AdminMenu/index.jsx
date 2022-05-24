import React, {Component} from 'react';
import {Button, Col, Menu, Row} from 'antd';
import 'antd/dist/antd.css';
import {DesktopOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {UserLogin} from "../UserLogin";
import {UserCenter} from "../UserCenter";

import Title from "antd/es/typography/Title";
import {ParkingList} from "../ParkingList";
import {UserPrivateParkingSpace} from "../UserPrivateParkingSpace";
import {RentApplyList} from "../RentApplyList";
import {AllLogList} from "../AllLogList";
import {AddAdmin} from "../AddAdmin";
import DataStatistics from "../DataStatistics";
import ParkingManage from "../ParkingManage";
import ParkingEdit from "../ParkingEdit";
const {SubMenu} = Menu

export class AdminMenu extends Component {


    state = {
        collapsed: false,
        routerComponent:<Title>
            停车场管理系统——管理员后台
        </Title>
    };

    showChange = (target)=>{

        // console.log(this.props.location.state)
        if(target.key==='1'){

            this.setState({
                routerComponent:<RentApplyList/>
            })
        }else if(target.key==='2'){
            this.setState({
                routerComponent:<AllLogList/>
            })
        }
        else if(target.key==='3'){
            this.setState({
                routerComponent:<AddAdmin/>
            })
        }    else if(target.key==='4'){
            this.setState({
                routerComponent:<DataStatistics/>
            })
        } else if(target.key==='5'){
            this.setState({
                routerComponent:<ParkingManage parkingManageModify = {this.parkingManageModify}/>
            })
        }
        /*else if(target.key==='3'){
            this.setState({
                routerComponent:<UserPrivateParkingSpace/>
            })
        }*/
    }


    parkingManageModify =  (zone,idInZone)=>{
      this.setState(
          {
              routerComponent:<ParkingEdit zone={zone} idInZone = {idInZone}/>
          }
      )
    }

    render() {

        //  console.log(this.state.routerComponent)
        //     console.log(this.props.location.state)
        return (
            <div className={'bgc'}>
                <Row justify="center" align="middle" style={{height: '3rem'}}>
                    <Col>
                        <Title  style={{marginTop: '1rem'}}> 停车场系统管理员操作中心</Title>
                    </Col>
                </Row>
                <Row justify="start" style={{marginTop: '1rem',backgroundColor:'white'}}>
                    <Col offset={0} span={4}  style={{backgroundColor:'#282c34',height:'40rem'}}>
                        <Menu defaultSelectedKeys={['1']}
                              defaultOpenKeys={['sub1']}
                              mode="inline"
                              theme="dark"
                              inlineCollapsed={this.state.collapsed}>
                            <Menu.Item onClick={this.showChange} key="1" icon={<DesktopOutlined/>}>申请批准</Menu.Item>
                            <Menu.Item onClick={this.showChange} key="2" icon={<DesktopOutlined/>}>管理日志</Menu.Item>
                            <Menu.Item onClick={this.showChange} key="3" icon={<DesktopOutlined/>}>添加管理员</Menu.Item>
                            <Menu.Item onClick={this.showChange} key="4" icon={<DesktopOutlined/>}>车位统计</Menu.Item>
                            <Menu.Item onClick={this.showChange} key="5" icon={<DesktopOutlined/>}>车位管理</Menu.Item>
                           {/* <Menu.Item onClick={this.showChange} key="2" icon={<DesktopOutlined/>}>车位情况</Menu.Item>
                            <Menu.Item onClick={this.showChange} key="3" icon={<DesktopOutlined/>}>我的车位</Menu.Item>*/}
                        </Menu>
                    </Col>
                    <Col span={16}  style={{backgroundColor:'white'}} >
                        {this.state.routerComponent}
                    </Col>
                </Row>


            </div>
        );
    }
}

