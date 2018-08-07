import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt
} from "react-router-dom";


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isBlocking: false
        }
    }
    render(){
        const { isBlocking } = this.state;
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                event.target.reset();
                this.setState(() => ({
                    isBlocking: false
                }))
            }}>
                FORM
                <Prompt
                    when={isBlocking}
                    message={
                        (location) => 
                        (`Are you sure you want to go to ${location.pathname}`)
                }/>

                <p>
                    Blocking? {isBlocking === true
                    ? 'Yes, click a link or back button'
                    : 'Nope'}
                </p>

                <p>
                    <input
                        size="50"
                        placeholder="type something to block transition"
                        onChange={(event) => {
                            const isBlocking = event.target.value.length > 0;
                            this.setState(() => ({
                                isBlocking
                            }))
                        }}/>
                </p>

                <p>
                    <button type="submit">Submit to clear blocking</button>
                </p>
            </form>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Form</Link></li>
                        <li><Link to="/one">One</Link></li>
                        <li><Link to="/two">Two</Link></li>
                    </ul>

                    <Route path="/" exact component={Form}/>
                    <Route path="/one" component={() => (<h1>One</h1>)}/>
                    <Route path="/two" component={() => (<h1>Two</h1>)}/>
                </div>
            </Router>
        )
    }
}

export default App;