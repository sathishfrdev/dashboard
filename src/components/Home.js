
import React from 'react'
import '../styles/App.css'
import 'antd/dist/antd.css';
import logo from '../../src/logo.png'

const Home = () => {
    return (
      <div className="background">
        <div className="container">     
          <div className="row">
            <div className="col-lg-8 top">
              <div className="logo">
                <img src={logo} alt="logosample"/>
              </div> 
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="titler">
                <h1>BUVIN</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  
       
    )
}

export default Home
