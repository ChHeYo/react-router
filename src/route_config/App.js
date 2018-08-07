import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";


const Sandwiches = () => (<h1>Sandwiches Component</h1>);
const Tacos = ({ routes }) => {
    return (
        <div>
            <h1>Tacos Component</h1>
            <ul style={{color: 'black'}}>
                {routes.map(({ path, name }) => (
                    <li><Link to={path}>{name}</Link></li>
                ))}
            </ul>

            {routes.map((route) => (
                <RouteWithSubRoutes key={route.path} {...route}/>
            ))}
        </div>
    )
}

const Bus = () => (<h1>Bus Component</h1>);
const Cart = () => (<h1>Cart Component</h1>);

const routes = [
    {
        path: '/sandwiches',
        component: Sandwiches,
    },
    {
        path: '/tacos',
        component: Tacos,
        routes: [
            {
                name: 'taco',
                path: '/tacos/bus',
                component: Bus
            },
            {
                name: 'cart',
                path: '/tacos/cart',
                component: Cart
            }
        ]
    }
]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={(props) => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/tacos">Tacos</Link></li>
                        <li><Link to="/sandwiches">Sandwiches</Link></li>
                    </ul>
                    {routes.map(route => (
                        <RouteWithSubRoutes key={route.path} {...route}/>
                    ))}
                </div>
            </Router>
        )
    }
}

export default App;