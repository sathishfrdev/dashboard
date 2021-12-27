import * as React from 'react';
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-bootstrap4';

import { Palette } from '@devexpress/dx-react-chart';
const data = [];
for (let i = 0; i < 15; i += 1) {
  data.push({ category: `item${i}`, val: 1 });
}

export default class Pie extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };

    // this.changeScheme = this.changeScheme.bind(this);
  }

 

  render() {
    const { data: chartData, scheme } = this.state;

    return (
      <div className="card">
        <Chart
          data={chartData}
        >
          <Palette scheme={scheme} />
          <PieSeries
            valueField="val"
            argumentField="category"
          />
        </Chart>
        
      </div>
    );
  }
}
