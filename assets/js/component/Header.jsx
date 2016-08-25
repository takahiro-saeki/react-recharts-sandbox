import React, {Component} from 'react';
import style from '../../css/style';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    page: 'react-rechars-sandbox'
  }

  render() {
    return (
      <header className={style.header}>{this.props.page}</header>
    )
  }
}
