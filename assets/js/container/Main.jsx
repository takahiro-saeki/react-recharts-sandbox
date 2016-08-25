import React, {Component} from 'react';
import {browserHistory} from 'react-router';

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
        <header>react-rechars-sandbox</header>
        <ul>
          <li onClick={() => this.location('/SimpleRadar')}>SimpleRadarChart</li>
          <li onClick={() => this.location('/SimpleLine')}>SimpleLineChart</li>
          <li onClick={() => this.location('/SimpleBar')}>SimpleBar</li>
          <li onClick={() => this.location('/StackedArea')}>StackedArea</li>
          <li></li>
          <li></li>
        </ul>
      </main>
    )
  }
}
