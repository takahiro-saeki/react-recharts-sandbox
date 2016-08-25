import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {browserHistory} from 'react-router';
import Header from '../component/Header';

export default class SimpleLine extends Component {
  constructor(props) {
    super(props);
  }

  location() {
    browserHistory.push('/')
  }

  render() {
    const randomData = () => {
      const data = [];
      for (let i = 1; i < 8; i++) {
        const obj = {};
        obj.name = `data${i}`;
        obj.uv = Math.floor(Math.random() * 9999);
        obj.pv = Math.floor(Math.random() * 9999);
        obj.amt = Math.floor(Math.random() * 9999);
        data.push(obj)
      }
      return data;
    }
    return(
      <main>
        <Header page='SimpleLine' />
        <LineChart width={600} height={300} data={randomData()}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <div onClick={this.location}>戻る</div>
      </main>
    )
  }
}
