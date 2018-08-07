import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Home from "./Home";
import Topics from "./Topics";

class DynamicImports extends Component {
    constructor(props){
        super(props);
        this.state = {
            component: null
        }
    }
    componentDidMount(){
        this.props.load()
        .then((module) => this.setState(() => ({ component: module.default })))
    }
    render(){
        return this.props.children(this.state.component)
    }
}

const Settings = (props) => (
    <DynamicImports load={() => import('./Settings')}>
        {(Component) => Component === null
        ? <h1>LOADING</h1>
        : <Component {...props}/>}
    </DynamicImports>
)

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/topics" component={Topics}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </Router>
        )
    }
}

export default App;