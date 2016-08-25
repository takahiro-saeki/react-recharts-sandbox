import React, {Component, PropTypes} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {browserHistory} from 'react-router';
import CustomTooltip from '../component/CustomTooltip';
import Header from '../component/Header';
import style from '../../css/style';

export default class CustomContentOfTooltip extends Component {
  constructor(props) {
    super(props);
  }

  location() {
    browserHistory.push('/');
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
        <Header page='CustomContentOfTooltip' />
        <BarChart width={600} height={300} data={dataList()} style={{margin: '3rem auto 2rem'}}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip content={<CustomTooltip/>}/>
          <Legend />
          <Bar dataKey="pv" barSize={20} fill="#8884d8" />
        </BarChart>
        <div onClick={this.location} className={style['return-btn']}>戻る</div>
      </main>
    )
  }
}
