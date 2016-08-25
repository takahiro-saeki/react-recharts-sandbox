import React, {Component} from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'Recharts';
import {browserHistory} from 'react-router';
import Header from '../component/Header';
import style from '../../css/style';

export default class SimpleRadar extends Component {
  constructor(props) {
    super(props);
  }

  location() {
    browserHistory.push('/')
  }

  render() {
    const nameList = ['Math', 'Chinese', 'English', 'Geography', 'Physics', 'Physics', 'History'];
    const dataBox = [];
    const dataList = () => {
      nameList.map(name => {
        let obj = {
          subject: name,
          A: Math.floor(Math.random() * 150),
          B: Math.floor(Math.random() * 150),
          fullMark: 150
        }
        dataBox.push(obj)
      })
      return dataBox;
    }

    return (
      <main>
        <Header page='SimpleRadar' />
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500}
          style={{margin: '3rem auto 2rem'}} data={dataList()}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
        </RadarChart>
        <div onClick={this.location} className={style['return-btn']}>戻る</div>
      </main>
    )
  }
}
