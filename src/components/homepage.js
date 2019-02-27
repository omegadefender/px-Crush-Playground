import React from 'react'
import ReactDOM from 'react-dom'
import Urlbar from './Urlbar'
import Navbar from './navbar'

class Homepage extends React.Component {
    render() {
        return (
            <div>
            <Navbar />
            <Urlbar />
            </div>
            )
    }
}

export default Homepage