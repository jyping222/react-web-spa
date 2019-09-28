import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './public/reset.css'
import Login from './containers/login/login'
import Admin from './containers/admin/admin'

ReactDOM.render((
<BrowserRouter>
    <Switch>
        <Route path='/login' component={Login}/>
        <Route  component={Admin}/>
    </Switch>
</BrowserRouter>
)
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

