import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import style from '../../css/style';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  location(url) {
    browserHistory.push(url)
  }

  render() {
    return (
      <main>
        <header className={style.header}>react-rechars-sandbox</header>
        <ul className={style.container}>
          <li className={style.box} onClick={() => this.location('/SimpleRadar')}>
            <div className={style['inner-box']}>SimpleRadarChart</div>
          </li>
          <li className={style.box} onClick={() => this.location('/SimpleLine')}>SimpleLineChart</li>
          <li className={style.box} onClick={() => this.location('/SimpleBar')}>SimpleBar</li>
          <li className={style.box} onClick={() => this.location('/StackedArea')}>StackedArea</li>
          <li className={style.box} onClick={() => this.location('/CustomContentOfTooltip')}>CustomContentOfTooltip</li>
          <li className={style.box} onClick={() => this.location('/JointLineScatter')}>JointLineScatter</li>
        </ul>
      </main>
    )
  }
}
