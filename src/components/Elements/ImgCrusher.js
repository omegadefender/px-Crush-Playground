import React from 'react'
import '../../css_files/ImgCrusher.css'

// Look up member variables. Can all of these variables and function be moved into the constructor?
const images = [
    { name: 'African Elephant', url: 'https://zw5alevhy0za-stg.pxcrush.net/african-elephant-animal-big-1772737.jpg' },
    { name: 'Ape', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animal-photography-ape-1785283.jpg' },
    { name: 'Longhorn', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animal-photography-domestic-animal-1758464.jpg' },
    { name: 'Elephant', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animal-photography-elephant-1772706.jpg' },
    { name: 'Hedgehog', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animal-world-autumn-206862.jpg' },
    { name: 'Flamingo', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animals-avian-158471.jpg' },
    { name: 'Parrot', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-avian-bird-162192.jpg' },
    { name: 'Peacock', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-beak-bird-71131.jpg' },
    { name: 'Tiger', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-big-cat-grass-46251.jpg' },
    { name: 'Chameleon', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-blur-chameleon-567540.jpg'},
    { name: 'Lemur', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-eyes-fur-33149.jpg' },
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

const methods = ['fit', 'fitfill', 'limit', 'limitfill', 'crop', 'trim', 'gravity', 'gravityfill', 'gravityshow']
const methodString = "method="
let methodQS = ""

const bgcolorString = "bgcolor="
let bgcolorQS = ""

const bgtypes = ['self', 'color']
const bgtypeString = "bgtype="
let bgtypeQS = ""

const qualityString = "quality="
let qualityQS = ""

const bgalphaString = "bgalpha="
let bgalphaQS = ""

function crusher() { 
    const uncleanQS = widthQS + heightQS + methodQS + bgcolorQS + bgtypeQS + qualityQS + bgalphaQS
    queryString = uncleanQS.slice(0, -1)    
    imgURL = baseURL + queryString
    console.log("Here is the imgURL:", imgURL, "and the query string:", queryString)
}

class Imglist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            name: '',
            width: '',
            height: '',
            method: '',
            bgtype: '',
            bgcolor: '',
            quality: '',
            bgalpha: ''
        }

        this.onPicSelect = this.onPicSelect.bind(this)
        this.widthChange = this.widthChange.bind(this)
        this.widthSubmit = this.widthSubmit.bind(this)
        this.heightChange = this.heightChange.bind(this)
        this.heightSubmit = this.heightSubmit.bind(this)
        this.methodSelect = this.methodSelect.bind(this)
        this.bgcolorChange = this.bgcolorChange.bind(this)
        this.bgcolorSubmit = this.bgcolorSubmit.bind(this)
        this.bgtypeSelect = this.bgtypeSelect.bind(this)
        this.qualityChange = this.qualityChange.bind(this)
        this.qualitySubmit = this.qualitySubmit.bind(this)
        this.bgalphaChange = this.bgalphaChange.bind(this)
        this.bgalphaSubmit = this.bgalphaSubmit.bind(this)

    }

    onPicSelect(event) {
        queryString = ''  
        const imgname = event.target.value
        baseURL = images.find(x => x.name === imgname).url + "?"
        this.setState({url: baseURL, name: imgname})
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

    methodSelect(event) {
        const methSelected = methods.find(m => m === event.target.value)
        methodQS = urlprefix + methodString + methSelected + "&"
        crusher()
        this.setState({method: methSelected})
    }

    bgcolorChange(event) {
        this.setState({bgcolor: event.target.value})
    }

    bgcolorSubmit(event) {
        bgcolorQS = urlprefix + bgcolorString + this.state.bgcolor + "&"
        crusher()
        this.setState({url: imgURL })
        event.preventDefault()
    }

    bgtypeSelect(event) {
        const bgtypeSelected = bgtypes.find(b => b === event.target.value)
        bgtypeQS = urlprefix + bgtypeString + bgtypeSelected + "&"
        crusher()
        this.setState({bgtype: bgtypeSelected})
    }

    qualityChange(event) {
        this.setState({quality: event.target.value})
    }

    qualitySubmit(event) {
        qualityQS = urlprefix + qualityString + this.state.quality + "&"
        crusher()
        this.setState({url: imgURL })
        event.preventDefault()
    }

    bgalphaChange(event) {
        this.setState({bgalpha: event.target.value})
    }

    bgalphaSubmit(event) {
        bgalphaQS = urlprefix + bgalphaString + this.state.bgalpha + "&"
        crusher()
        this.setState({url: imgURL })
        event.preventDefault()
    }


    render() {
        return (
            <div>
                <select id="image-list" onChange={this.onPicSelect}>
                    {images.map((element, index) => { 
                      return <option value={element.name} key={index} >{element.name}</option>
                    })}
                </select>                       
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
                <select id="methods-list" onChange={this.methodSelect}>
                    {methods.map((element, index) => { 
                      return <option value={element} key={index} >{element}</option>
                    })}
                </select>
                <form onSubmit={this.bgcolorSubmit} id="bgcolor">
                    <label>
                    <input type="text" onChange={this.bgcolorChange} value={this.state.bgcolor} />
                    </label>
                    <input type="submit" value="bgcolor" />
                </form>
                <select id="bgtype-list" onChange={this.bgtypeSelect}>
                    {bgtypes.map((element, index) => { 
                      return <option value={element} key={index} >{element}</option>
                    })}
                </select>
                <form onSubmit={this.qualitySubmit} id="quality">
                    <label>
                    <input type="text" onChange={this.qualityChange} value={this.state.quality} />
                    </label>
                    <input type="submit" value="quality" />
                </form>
                <form onSubmit={this.bgalphaSubmit} id="bgalpha">
                    <label>
                    <input type="text" onChange={this.bgalphaChange} value={this.state.bgalpha} />
                    </label>
                    <input type="submit" value="bgalpha" />
                </form>
                <pre>?{queryString}</pre>                             
            </div>
        )}
}

export default Imglist