import React, {Component} from 'react';

export default class CustomTooltip extends Component {
  constructor(props) {
    super(props);
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
