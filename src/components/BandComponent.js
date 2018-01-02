import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchWiki } from '../actions/fetchWiki';

class BandComponent extends Component {
  render() {
    return (
      <div>
          <h1>{this.props.match.params.name}'s Page</h1>
          <button onClick={() => this.props.fetchWiki(this.props.match.params.name)}>Fetch User</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
console.log('props --> ', state);
  return {
    band: state.fetchWiki
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWiki: (bandName) => dispatch(fetchWiki(bandName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandComponent);
