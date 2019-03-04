import React from 'react'
import Crusher from '../../components/Pages/crusher'
import '../../css_files/Urlbar.css'

class Urlbar extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            url: ""
        }

        this.url = this.state
    }    

    imgURL(event) {
        this.setState({url: event.target.value})
    }

        render() {
         return (
            <div>
                <form>
                    <label>
                        <input type="text" />
                    </label>
                    <a href="/crusher">
                        <input type="button" value="PXcrush it!" onChange={this.imgURL} />
                    </a>
                </form>
                <Crusher url={this.imgURL} />
            </div>
        )
    }
}

export default Urlbar
