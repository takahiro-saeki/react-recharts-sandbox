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

    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ];

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
