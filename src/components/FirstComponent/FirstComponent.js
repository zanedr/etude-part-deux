import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCount, decrementCount } from '../../redux/actions/action_count';
require("./style.scss");

class FirstComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="firstComponent">
        <h1>Hello Earthlings!</h1>
        <h2>Welcome to React with Redux.</h2>

        <br />
        <br />

        {/* Counter Example */}
        <h3>Current Count</h3>
        <p> {this.props.count} </p>
        <button onClick={this.props.incrementCount}>Increase Count</button>
        <button onClick={this.props.decrementCount}>Decrease Count</button>

        <br />
        <br />
        <br />
        <br />

        {/* New page to show React Router functionality */}
        <h4>Bored with the counter?</h4>
        <Link className="btn btn-md btn-info" to="/second-component">Go to another page</Link>
      </div>
    );
  }
}

function mapStateToProps({ count }) {
  return { count };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ incrementCount, decrementCount }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstComponent);
