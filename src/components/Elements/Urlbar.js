import React from 'react'
import  { Redirect } from 'react-router-dom'
import '../../css_files/Urlbar.css'

class Urlbar extends React.Component {

        render() {
         return (
            <form>
                <label>
                    <input type="text" />
                </label>
                <a href="/crusher">
                    <input type="button" value="PXcrush it!" />
                </a>
            </form>
        )
    }
}

export default Urlbar
