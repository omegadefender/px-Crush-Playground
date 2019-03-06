import React from 'react'
import '../../css_files/ImgCrusher.css'

// Look up member variables. Can all of these variables and function be moved into the constructor?
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
let baseURL = ""
let imgURL = ""
const urlprefix = "pxc_"
let queryString = ""
const widthString = "width="
let widthQS = ""
const heightString = "height="
let heightQS = ""

function crusher() { 
    const uncleanQS = widthQS + heightQS
    queryString = uncleanQS.slice(0, -1)    
    imgURL = baseURL + queryString
    console.log("Here is the imgURL:", imgURL, "and the query string:", queryString)
}

class Imglist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            name: null,
            width: '',
            height: ''
        }

        this.onPicSelect = this.onPicSelect.bind(this)
        this.widthChange = this.widthChange.bind(this)
        this.widthSubmit = this.widthSubmit.bind(this)
        this.heightChange = this.heightChange.bind(this)
        this.heightSubmit = this.heightSubmit.bind(this)
    }

    onPicSelect(element) {  
        baseURL = element.url + "?"
        this.setState({url: element.url, name: element.name})
    }

    widthChange(event) {
        this.setState({width: event.target.value})
    } 

    widthSubmit(event) {
        widthQS = urlprefix + widthString + this.state.width + "&"
        crusher()
        this.setState({url: imgURL})
        event.preventDefault()
    }

    heightChange(event) {
        this.setState({height: event.target.value})
    }

    heightSubmit(event) {
        heightQS = urlprefix + heightString + this.state.height + "&"
        crusher()
        this.setState({url: imgURL })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <ul>
                    {images.map((element, index) => { 
                      return <li key={index} onClick={() => this.onPicSelect(element)}>{element.name}</li>
                    })}
                </ul>                       
                <img src={this.state.url} alt={this.state.name}></img>
                <form onSubmit={this.widthSubmit} id="width">
                    <label>
                    <input type="text" onChange={this.widthChange} value={this.state.width} />
                    </label>
                    <input type="submit" value="Width" />
                </form>
                <form onSubmit={this.heightSubmit} id="height">
                    <label>
                    <input type="text" onChange={this.heightChange} value={this.state.height} />
                    </label>
                    <input type="submit" value="Height" />
                </form>             
            </div>
        )
    }
}

export default Imglist