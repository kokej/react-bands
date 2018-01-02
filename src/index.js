import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { history } from './store';

import RouterComponent from './router/routerComponent';
import HomeComponent from './components/HomeComponent';
import BandComponent from './components/BandComponent';
import FooBarComponent from './components/FooBarComponent';
import NotFoundComponent from './components/NotFoundComponent';
import TestComponent from './components/TestComponent';
import './styles/App.css';
import 'rxjs';

class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <RouterComponent>
                <Switch>
                  <Route exact path="/" component={HomeComponent}/>
                  <Route exact path="/foo" component={FooBarComponent}/>
                  <Route exact path="/bar" component={FooBarComponent}/>
                  <Route exact path="/test" component={TestComponent}/>
                  <Route path="/band/:name" component={BandComponent}/>
                  <Route path="**" component={NotFoundComponent}/>
                </Switch>
              </RouterComponent>
            </ConnectedRouter>
          </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
