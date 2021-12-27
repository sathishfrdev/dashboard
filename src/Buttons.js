import React, { Component } from 'react'
import { Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';


export default class Btns extends Component {
    state = {
        loadings: [],
      };
      enterLoading = index => {
        this.setState(({ loadings }) => {
          const newLoadings = [...loadings];
          newLoadings[index] = true;

          return {
            loadings: newLoadings,
          };
        });
        setTimeout(() => {
          this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = false;
    
            return {
              loadings: newLoadings,
            };
          });
        }, 6000);
      };
    
      render() {
        const { loadings } = this.state;
        return (
          <>
            <Space style={{ width: '100%' }}>
              <Button type="primary" loading>
                Loading
              </Button>
            </Space>
    
        
          </>
        );
      }
    }