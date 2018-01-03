import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchWiki } from '../actions/fetchWiki';

class BandComponent extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      return this.props.fetchWiki(this.props.match.params.name);
    }
  }

  componentDidMount(){
    return this.props.fetchWiki(this.props.match.params.name);
  }

  render() {
    return (
      <div>
        {this.props.band && <div><h2>{this.props.band.title}</h2><p dangerouslySetInnerHTML={{ __html: this.props.band.extract }} /></div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    band: state.fetchWiki.band
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWiki: (bandName) => dispatch(fetchWiki(bandName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandComponent);
