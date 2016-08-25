import React, {Component, PropTypes} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {browserHistory} from 'react-router';
import style from '../../css/style';

class CustomTooltip extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string
  }

  getIntroOfPage(label) {
    switch(label) {
      case 'Page A':
        return "Page A is about men's clothing";
      case 'Page B':
        return "Page B is about women's dress";
      case 'Page C':
        return "Page C is about women's bag";
      case 'Page D':
        return "Page D is about household goods";
      case 'Page E':
        return "Page E is about food";
      case 'Page F':
        return "Page F is about baby food";
    }
  }

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className={style['custom-tooltip']}>
          <p className={style.label}>{`${label} : ${payload[0].value}`}</p>
          <p className={style.intro}>{this.getIntroOfPage(label)}</p>
          <p className={style.desc}>Anything you want can be displayed here.</p>
        </div>
      )
    }
  }
}

export default class CustomContentOfTooltip extends Component {
  constructor(props) {
    super(props);
  }

  location() {
    browserHistory.push('/');
  }

  render() {
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
      <BarChart width={600} height={300} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip content={<CustomTooltip/>}/>
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#8884d8" />
      </BarChart>
      <div onClick={this.location}>戻る</div>
    </main>
    )
  }
}
