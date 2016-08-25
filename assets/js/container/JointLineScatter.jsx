import React, {Component} from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {browserHistory} from 'react-router';

export default class JointLineScatter extends Component {
  constructor(props) {
    super(props);
  }

  location() {
    browserHistory.push('/')
  }

  render() {
    const data01 = [{x: 10, y: 30}, {x: 30, y: 200}, {x: 45, y: 100}, {x: 50, y: 400}, {x: 70, y: 150}, {x: 100, y: 250}];
    const data02 = [{x: 30, y: 20}, {x: 50, y: 180}, {x: 75, y: 240}, {x: 100, y: 100}, {x: 120, y: 190}];
    return (
      <main>
        <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <XAxis dataKey={'x'} name='stature' unit='cm'/>
          <YAxis dataKey={'y'} name='weight' unit='kg'/>
          <ZAxis range={[100]}/>
          <CartesianGrid />
          <Tooltip cursor={{strokeDasharray: '3 3'}}/>
          <Legend/>
          <Scatter name='A school' data={data01} fill='#8884d8' line shape="cross"/>
          <Scatter name='B school' data={data02} fill='#82ca9d' line shape="diamond"/>
        </ScatterChart>
        <div onClick={this.location}>戻る</div>
      </main>
    )
  }
}
