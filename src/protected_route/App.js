import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb){
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer: false,
        }
        this.login = this.login.bind(this);
    }
    login(){
        fakeAuth.authenticate(() => {
            this.setState(() => ({ redirectToReferrer: true }));
        })
    }
    render() {
        const { redirectToReferrer } = this.state;
        const { from } = this.props.location.state || { from: { pathname: '/' }};

        if (redirectToReferrer){
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div>
                <p>You must login to view this page at {from.pathname}</p>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated
        ? <Component {...props}/>
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }}/>
    )}/>
)

const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated
    ? <p>
    Welcome <button onClick={() => {
        fakeAuth.signout(history.push('/'))
    }}>Logout</button>
    </p>
    : <h1>You are not logged in</h1>
))

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <AuthButton/>
                    <ul>
                        <li><Link to="/public">Public Page</Link></li>
                        <li><Link to="/protected">Protected Page</Link></li>
                    </ul>
                    <Route path="/public" component={Public}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/protected" component={Protected}/>
                </div>
            </Router>
        )
    }
}

export default App;