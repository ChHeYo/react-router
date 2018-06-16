import React, { Component } from "react";
import ReactDOM from "react-dom";

require("normalize.css");
require("./style/main.scss");

class App extends Component {
    render(){
        return (
            <div>
                <p>It's Working!</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)