import React, { Component } from "react";
import { connect } from 'react-redux';
import { increase, decrease } from '../actions/count';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <p>Test redux actions. Number: </p>
        <h2>{this.props.number}</h2>
        <button onClick={() => this.props.increase(1)}>Increase</button>
        <button onClick={() => this.props.decrease(1)}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.count.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (number) => {
      dispatch(increase(number));
    },
    decrease: (number) => {
      dispatch(decrease(number));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
