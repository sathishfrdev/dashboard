import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  SplineSeries,
  Legend,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';

import { sales as data } from '../src/demo-data/bardata';
import '../src/styles/Chart.css'
const option = [2017, 2018, 2019];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: data[2017],
    };
    this.changeData = this.changeData.bind(this);
    this.id = undefined;
    this.index = 1;
  }

  componentDidMount() {
    const selectElement = document.getElementById('select');
    this.id = setInterval(() => {
      selectElement.selectedIndex = this.index;
      this.setState({ data: data[option[this.index]] });
      if (this.index === 2) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    }, 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  changeData(e) {
    this.setState({ data: data[e.target.value] });
  }

  render() {
    const { data: chartData } = this.state;

    return (
        
      <div>
      <select id="select" style={{ width: '100px', margin: '10px' }} onChange={this.changeData}>
          <option>{ option[0] }</option>
          <option>{ option[1] }</option>
          <option>{ option[2] }</option>
        </select>
        <Chart id="chart"
          data={chartData}
        >
          <ValueScale name="sale" />
          <ValueScale name="total" />

          <ArgumentAxis />
          <ValueAxis  scaleName="sale" showGrid={true}  showTicks />
          <ValueAxis  scaleName="total" position="right" showGrid={true}  showTicks />

          <BarSeries
            name="Units Sold"
            valueField="sale"
            argumentField="month"
            scaleName="sale"
          />

          <SplineSeries
            name="Total Transactions"
            valueField="total"
            argumentField="month"
            scaleName="total"
          />
          <Animation />
          
        </Chart>
        
      </div>
    );
  }
}
