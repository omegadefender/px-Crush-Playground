import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './css_files/index.css'
import Navbar from './components/navbar'
import Urlbar from './components/Urlbar'
import Homepage from './components/homepage'

ReactDOM.render((
    <Router>
        <Route path="/" component={Homepage} />
    </Router>
    ), document.getElementById('navigation')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
