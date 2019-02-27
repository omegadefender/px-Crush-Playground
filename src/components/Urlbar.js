import React from 'react'
import '../css_files/Urlbar.css'

class Urlbar extends React.Component {
    render() {
        return (
            <form >
                <label>
                    <input type="text" name="URL" id ="analyse" />
                </label>
                <input type="submit" value="PXcrush it!" />
            </form>
        )
    }
}

export default Urlbar
