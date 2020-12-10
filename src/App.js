import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


{/*const Header = () =>(
    <div>
        <h1>HEADER</h1>
    </div>
)*/}

const routes = (
    <BrowserRouter>
        <div>
            {/*<Header />*/}
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));

