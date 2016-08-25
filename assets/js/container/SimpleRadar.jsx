import React, {Component} from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'Recharts';
import {browserHistory} from 'react-router';
import Header from '../component/Header';

export default class SimpleRadar extends Component {
  constructor(props) {
    super(props);
  }

  location() {
    browserHistory.push('/')
  }

  render() {
    const data = [
      { subject: 'Math', A: 120, B: 110, fullMark: 150 },
      { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
      { subject: 'English', A: 86, B: 130, fullMark: 150 },
      { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
      { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
      { subject: 'History', A: 65, B: 85, fullMark: 150 },
    ];
    return (
      <main>
        <Header page='SimpleRadar' />
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
        </RadarChart>
        <div onClick={this.location}>戻る</div>
      </main>
    )
  }
}
