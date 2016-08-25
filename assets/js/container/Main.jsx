import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import uuid from 'node-uuid';
import style from '../../css/style';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  location(url) {
    browserHistory.push(url)
  }

  render() {
    const data = [
      'SimpleRadar', 'SimpleLine', 'SimpleBar',
      'StackedArea', 'CustomContentOfTooltip', 'JointLineScatter'
    ];

    const list = data.map(list => {
      return (
        <li key={uuid.v4()} className={style.box} onClick={() => this.location(`/${list}`)}>
          <div className={style['inner-box']}>{list}</div>
        </li>
      )
    })

    return (
      <main>
        <header className={style.header}>react-rechars-sandbox</header>
        <ul className={style.container}>{list}</ul>
      </main>
    )
  }
}
