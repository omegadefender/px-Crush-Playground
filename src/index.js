import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router, Route } from "react-router-dom";

import './css_files/index.css'
import Homepage from './components/Pages/Homepage'
import Crusher from './components/Pages/crusher';

ReactDOM.render((
    <Router>
        <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/crusher" component={Crusher} />
        </div>
    </Router>
    ), document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
