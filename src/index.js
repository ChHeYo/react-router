import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

require("normalize.css");
require("./style/main.scss");


ReactDOM.render(
    <App/>,
    document.getElementById("app")
)