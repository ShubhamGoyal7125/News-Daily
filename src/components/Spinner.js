import React, { Component } from 'react';
import spinner from './SpinnerImg.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-4">
      <img src={spinner} alt="img" /></div>
    )
  }
}

export default Spinner;