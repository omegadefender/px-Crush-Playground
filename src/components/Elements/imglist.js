import React from 'react'
import '../../css_files/imglist.css'

const images = [
    { name: 'African Elephant ', url: 'https://zw5alevhy0za-stg.pxcrush.net/african-elephant-animal-big-1772737.jpg' },
    { name: 'Ape', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animal-photography-ape-1785283.jpg' },
    { name: 'Domestic Animal', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animal-photography-domestic-animal-1758464.jpg' },
    { name: 'Elephant', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animal-photography-elephant-1772706.jpg' },
    { name: 'Hedgehog', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animal-world-autumn-206862.jpg' },
    { name: 'Pink Bird', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animals-avian-158471.jpg' },
    { name: 'Bird', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-avian-bird-162192.jpg' },
    { name: 'Peacock', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-beak-bird-71131.jpg' },
    { name: 'Tiger', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-big-cat-grass-46251.jpg' },
    { name: 'Chameleon', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-blur-chameleon-567540.jpg'},
    { name: 'Small Monkey', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-eyes-fur-33149.jpg' },
    { name: 'Dragonfly', url: 'https://zw5alevhy0za-stg.pxcrush.net/antenna-biology-blue-531587.jpg' },
    { name: 'Snail', url: 'https://zw5alevhy0za-stg.pxcrush.net/antennae-close-up-garden-pest-53203.jpg' },
    { name: 'Blue Bird', url: 'https://zw5alevhy0za-stg.pxcrush.net/avian-beak-bird-416117.jpg' },
    { name: 'Grasshopper', url: 'https://zw5alevhy0za-stg.pxcrush.net/close-up-grasshopper-hd-wallpaper-59981.jpg' },
    { name: 'Sqirrel', url: 'https://zw5alevhy0za-stg.pxcrush.net/fence-macro-park-1320459.jpg' }
]

const urlprefix = "pxc_"

class Imglist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            name: null,
            width: ''
        }

        this.onClick = this.onClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onClick(element) {
        this.setState({url: element.url, name: element.name}, () => {
            console.log(this.state)
         })
    }

    handleChange(event) {
        this.setState({width: event.target.value}, () => {
            console.log(this.state)
        })
    } 

    render() {

        var that = this

        return (
            <div>
                <ul>
                    {images.map(function(element, index) { // <-- you can use arrow func, so that you don't need to assign this to that.
                       return <li key={index} onClick={() => that.onClick(element)}>{element.name}</li>
                    })}
                </ul>                       
                <img src={that.state.url} alt={that.state.name}></img>
                <form >
                    <label>
                    Width:
                    <input type="text" onChange={that.handleChange} value={that.state.width} />
                    </label>
                    <input type="submit" value="submit" />
                </form>         
            </div>
        )
    }
}

export default Imglist