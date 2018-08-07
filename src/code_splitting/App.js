import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: null
        }
        this.chooseLocation = this.chooseLocation.bind(this);
    }
    chooseLocation(){
        import('./Location')
        .then((mod) => this.setState(() => ({ location: mod.default })))
    }
    render(){
        return (
            <div>
                Code Splitting Example
                <button onClick={this.chooseLocation}>
                    Click here
                </button>
            </div>
        )
    }
}

export default App;