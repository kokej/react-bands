import React, { Component } from "react";
import { connect } from 'react-redux';
import { ping } from '../actions/ping';
import { fetchUser } from '../actions/fetchUser';

class TestComponent extends Component {
    render() {
        return (
            <div>
                <h2>Ping Test</h2>
                <h3>is pinging: {this.props.isPinging.toString()}</h3>
                <button onClick={() => this.props.ping()}>Start PING</button>

                <br/>
                <h2>Fetch User Demo</h2>
                <button onClick={() => this.props.fetchUser('kokej')}>Fetch User</button>
                <div>{ this.props.user && <ul><li>{this.props.user.login}</li><li>{this.props.user.url}</li></ul> }</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
console.log('props --> ', state);
  return {
    isPinging: state.pingReducer.isPinging,
    user: state.fetchUser['kokej']
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ping: () => dispatch(ping()),
    fetchUser: (username) => dispatch(fetchUser(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
