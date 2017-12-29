import React, { Component } from "react";

class FooBarComponent extends Component {
    render() {
      const dataUrl = (pathname) => pathname.replace('/', '');
        return (
            <div>
                <h1>{dataUrl(this.props.location.pathname)} component</h1>
            </div>
        );
    }
}

export default FooBarComponent;
