import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
                <NavLink className="navbar-brand" to={"/"}>React Bands</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/home"}>Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/foo">Foo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/bar">Bar</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Bands
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item">
                              <NavLink className="nav-link" to="/band/beatles">The Beatles</NavLink>
                            </li>
                            <li className="dropdown-item">
                              <NavLink className="nav-link" to="/band/rolling-stones">The Rolling Stones</NavLink>
                            </li>
                            <li className="dropdown-item">
                              <NavLink className="nav-link" to="/band/queen">Queen</NavLink>
                            </li>
                          </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;
