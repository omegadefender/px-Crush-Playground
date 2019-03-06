import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router, Route } from "react-router-dom";

import './css_files/index.css'
import Homepage from './components/Pages/Homepage'

ReactDOM.render((
    <Router>
        <div>
        <Route path="/" component={Homepage} />
        </div>
    </Router>
    ), document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
