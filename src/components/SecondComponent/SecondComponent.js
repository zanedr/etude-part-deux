import React, { Component } from 'react';
import { Link } from 'react-router';
require("./style.scss");

const SecondComponent = () => {
  return (
    <div className="secondComponent">
      <h1>Welcome Aliens!</h1>
      <p>You have left Earth's atmosphere.</p>
      <Link className="btn btn-md btn-info" to="/">Return Back</Link>
    </div>
  );
}

export default SecondComponent;
