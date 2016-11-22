import React, { Component } from 'react';
import FirstComponent from './FirstComponent/FirstComponent';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <FirstComponent />
      </div>
    );
  }
}
