import React, {Component} from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {browserHistory} from 'react-router';
import {sortBy} from 'lodash/collection';
import style from '../../css/style';
import Header from '../component/Header';

export default class JointLineScatter extends Component {
  constructor(props) {
    super(props);
  }

  location() {
    browserHistory.push('/')
  }

  render() {
    const dataList = len => {
      const box1 = []
      for (let i = 1; i < len; i++) {
        let obj = {
          x: Math.floor(Math.random() * 200),
          y: Math.floor(Math.random() * 200)
        };
        box1.push(obj);
      }
      const result = sortBy(box1, 'x');
      return result
    }

    const color = ['#E91E63', '#00BCD4', '#607D8B', '#FF5722', '#FFEB3B', '#64FFDA', '#3F51B5'];
    const pallet = () => color[Math.floor(Math.random() * color.length)];

    return (
      <main>
        <Header page='JointLineScatter' />
        <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}} style={{margin: '3rem auto 2rem'}}>
          <XAxis dataKey={'x'} name='stature' unit='cm'/>
          <YAxis dataKey={'y'} name='weight' unit='kg'/>
          <ZAxis range={[100]}/>
          <CartesianGrid />
          <Tooltip cursor={{strokeDasharray: '3 3'}}/>
          <Legend/>
          <Scatter name='A school' data={dataList(7)} fill={pallet()} line shape="cross"/>
          <Scatter name='B school' data={dataList(6)} fill={pallet()} line shape="diamond"/>
        </ScatterChart>
        <div onClick={this.location} className={style['return-btn']}>戻る</div>
      </main>
    )
  }
}
