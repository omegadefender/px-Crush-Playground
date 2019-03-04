import React from 'react'
import Navbar from '../Elements/navbar'
import Imglist from '../Elements/imglist'

class Crusher extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}

    }

    render() {
        return (
            <div>
            <Navbar />
            <Imglist />
            </div>
        )
    }
}

export default Crusher