import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import RouterComponent from './router/routerComponent';
import HomeComponent from './components/HomeComponent';
import BandComponent from './components/BandComponent';
import FooBarComponent from './components/FooBarComponent';
import NotFoundComponent from './components/NotFoundComponent';
import AppCSS from './styles/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <RouterComponent>
                    <Switch>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route exact path="/home" component={HomeComponent}/>
                        <Route exact path="/foo" component={FooBarComponent}/>
                        <Route exact path="/bar" component={FooBarComponent}/>
                        <Route path="/band/:name" component={BandComponent}/>
                        <Route path="**" component={NotFoundComponent}/>
                    </Switch>
                </RouterComponent>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
