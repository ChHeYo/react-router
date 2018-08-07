import React, { Component } from "react";
import ReactDOM from "react-dom";

// import App from "./components/App";
// import App from "./animated_transition/App";
// import App from "./code_splitting/App";
// import App from "./code_split_two/App";
// import App from "./protected_route/App";
// import App from "./preventing_transition/App";
// import App from "./recursive_path/App";
// import App from "./route_config/App";
import App from "./server_side_rendering/App";

require("normalize.css");
require("./style/main.scss");

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)