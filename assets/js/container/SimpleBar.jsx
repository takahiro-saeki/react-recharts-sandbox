import React, {Component} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {browserHistory} from 'react-router';
import Header from '../component/Header';
import style from '../../css/style';

export default class SimpleBar extends Component {
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
          uv: Math.floor(Math.random() * 2000),
          pv: Math.floor(Math.random() * 2000),
          amt: Math.floor(Math.random() * 2000)
        }
        dataBox.push(obj)
      })
      return dataBox;
    }
    return (
      <main>
        <Header page='SimpleBar' />
        <BarChart width={600} height={300} data={dataList()} style={{margin: '3rem auto 2rem'}}
          margin={{top: 5, right: 30, left: 20, bottom: 5}} style={{margin: '3rem auto 2rem'}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        <div onClick={this.location} className={style['return-btn']}>戻る</div>
      </main>
    )
  }
}
