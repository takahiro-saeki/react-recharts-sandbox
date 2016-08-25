import React, {Component} from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import {browserHistory} from 'react-router';
import Header from '../component/Header';
import style from '../../css/style';

export default class StackedArea extends Component {
  constructor(props) {
    super(props);
  }

  location() {
    browserHistory.push('/')
  }

  render() {
    const nameList = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const dataBox = [];
    const dataList = () => {
      nameList.map(name => {
        let obj = {
          name: `Page ${name}`,
          uv: Math.floor(Math.random() * 9999),
          pv: Math.floor(Math.random() * 9999),
          amt: Math.floor(Math.random() * 9999)
        }
        dataBox.push(obj)
      })
      return dataBox;
    }

    return (
      <main>
        <Header page='StackedArea' />
        <AreaChart width={600} height={400} data={dataList()} style={{margin: '3rem auto 2rem'}}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
          <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
          <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
        </AreaChart>
        <div onClick={this.location} className={style['return-btn']}>戻る</div>
      </main>
    )
  }
}
