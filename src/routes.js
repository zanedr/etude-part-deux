import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FirstComponent from './components/FirstComponent/FirstComponent';
import SecondComponent from './components/SecondComponent/SecondComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FirstComponent} />
    <Route path="/second-component" component={SecondComponent} />
  </Route>
);
