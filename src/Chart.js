import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {
    Chart,
    PieSeries,
  } from '@devexpress/dx-react-chart-bootstrap4';

  import { Palette } from '@devexpress/dx-react-chart';

import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
 import '../src/styles/Chart.css';
 import 'antd/dist/antd.css';
 import {PlayCircleOutlined,PicLeftOutlined,CalendarOutlined,WechatOutlined,PieChartOutlined,SettingOutlined,LogoutOutlined     } from '@ant-design/icons';
import logo from '../src/icn.png'
// import Pie from '../src/Pie'
import { DatePicker, Space } from 'antd';
import Demo from '../src/Bar'
import TableDa from './Table';
import '../src/styles/Table.css'
import Btns  from './Buttons';
const { RangePicker } = DatePicker;



const ChartDa = () => {
   
    return (
    <div className="container">
        <div className="row mt-3 bo">
            <div className="col-1 bo">
            <div className="icon-bar">
            <i><img src={logo} alt="logu" className="log"/></i>
            <a href="#"><i><PlayCircleOutlined/></i></a> 
            <a href="#"><i> <PicLeftOutlined /></i></a> 
            <a href="#"><i> <CalendarOutlined /></i></a>
            <a href="#"><i> <WechatOutlined /></i></a> 
            <a href="#"><i> <PieChartOutlined /></i></a> 
            <a href="#"><i> <SettingOutlined /> </i></a> 
            <a href="#"><i> <LogoutOutlined /></i></a> 
          </div>
            
            </div>
            <div className="col-3 bo">
            <h1 className="mt-4">Hapag-Lioyd</h1>
            <div className="noemp">
            <h3 className="pt-3">No Of Employees</h3>
            <h3 className=" num pt-2">2,500</h3>
            </div>
            <div className="noemp mt-3">
            <h3 className="pt-3">Next Test Date</h3>
            <h3 className=" num pt-2">28/10/2020</h3>
            </div>
            <div className="chartround mt-3">
            <h5 className="pt-3">Result Summary</h5>
            <div>
                <h1>hello</h1>
            </div>
            </div>

            </div>
            <div className="col-8 bo">
                <div className="box1 mt-3">
                <div className="row bar">
                    <div className="col-12">
                    <Demo/>
                    <div className="row bared">
                    <div className='col-6'>
                    <h5>Orders</h5>
                    </div>
                    <div className='col-3'>
                    <Btns/>
                    </div>
                    <div className='col-3'>
                    </div>
                    </div>
                    <TableDa/>
                    </div>
                    
                </div>
                
           
                
                
                
                
                </div>

            </div>
        </div>
    </div>
    )
}

export default ChartDa
