import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import Main from './container/Main';
import SimpleLine from './container/SimpleLine';
import SimpleRadar from './container/SimpleRadar';
import SimpleBar from './container/SimpleBar';
import StackedArea from './container/StackedArea';
import CustomContentOfTooltip from './container/CustomContentOfTooltip';
import JointLineScatter from './container/JointLineScatter';

const elem = document.querySelector('#app');
render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} />
    <Route path='/SimpleRadar' component={SimpleRadar} />
    <Route path='/SimpleLine' component={SimpleLine} />
    <Route path='/SimpleBar' component={SimpleBar} />
    <Route path='/StackedArea' component={StackedArea} />
    <Route path='/CustomContentOfTooltip' component={CustomContentOfTooltip} />
    <Route path='/JointLineScatter' component={JointLineScatter} />
  </Router>,
  elem
  )
