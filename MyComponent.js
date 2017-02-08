import React, { Component } from 'react';
import Radium from 'radium';


class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickState: 'Click me!',
            clicks: 0
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        let new_clicks = this.state.clicks + 1;
        this.setState({
            clickState: new_clicks,
            clicks: new_clicks
        });
    }

    render() {
        return <a className="btn btn-large btn-block btn-danger" onClick={this.clickHandler}>{this.state.clickState}</a>;
    }
}

export default Radium(MyComponent);
