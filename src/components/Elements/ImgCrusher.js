import React from 'react'
import '../../css_files/ImgCrusher.css'

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

        this.baseURL = ''
        this.imgURL = ''
        this.urlprefix = "pxc_"
        this.queryString = ''
        this.widthString = 'width='
        this.widthQS = ''
        this.heightString = 'height='
        this.heightQS = ''
        this.methods = ['fit', 'fitfill', 'limit', 'limitfill', 'crop', 'trim', 'gravity', 'gravityfill', 'gravityshow']
        this.methodString = 'method='
        this.methodQS = ''
        this.bgcolorString = 'bgcolor='
        this.bgcolorQS = ''
        this.bgtypes = ['self', 'color']
        this.bgtypeString = 'bgtype='
        this.bgtypeQS = ''
        this.qualityString = 'quality='
        this.qualityQS = ''
        this.bgalphaString = 'bgalpha='
        this.bgalphaQS = ''        
    }

    crusher = () => { 
        const uncleanQS = this.widthQS + this.heightQS + this.methodQS + this.bgcolorQS + this.bgtypeQS + this.qualityQS + this.bgalphaQS
        this.queryString = uncleanQS.slice(0, -1)    
        this.imgURL = this.baseURL + this.queryString
        console.log("Here is the imgURL:", this.imgURL, "and the query string:", this.queryString)
    }

    onPicSelect = (event) => {
        this.queryString = ''  
        const imgname = event.target.value
        this.baseURL = images.find(x => x.name === imgname).url + "?"
        this.setState({url: this.baseURL, name: imgname})
    }

    widthChange = (event) => {
        this.setState({width: event.target.value})
    } 

    widthSubmit = (event) => {
        this.widthQS = this.urlprefix + this.widthString + this.state.width + "&"
        this.crusher()
        this.setState({url: this.imgURL})
        event.preventDefault()
    }

    heightChange = (event) => {
        this.setState({height: event.target.value})
    }

    heightSubmit = (event) => {
        this.heightQS = this.urlprefix + this.heightString + this.state.height + "&"
        this.crusher()
        this.setState({url: this.imgURL })
        event.preventDefault()
    }

    methodSelect = (event) => {
        const methSelected = this.methods.find(m => m === event.target.value)
        this.methodQS = this.urlprefix + this.methodString + methSelected + "&"
        this.crusher()
        this.setState({method: methSelected})
    }

    bgcolorChange = (event) => {
        this.setState({bgcolor: event.target.value})
    }

    bgcolorSubmit = (event) => {
        this.bgcolorQS = this.urlprefix + this.bgcolorString + this.state.bgcolor + "&"
        this.crusher()
        this.setState({url: this.imgURL })
        event.preventDefault()
    }

    bgtypeSelect = (event) => {
        const bgtypeSelected = this.bgtypes.find(b => b === event.target.value)
        this.bgtypeQS = this.urlprefix + this.bgtypeString + bgtypeSelected + "&"
        this.crusher()
        this.setState({bgtype: bgtypeSelected})
    }

    qualityChange = (event) => {
        this.setState({quality: event.target.value})
    }

    qualitySubmit = (event) => {
        this.qualityQS = this.urlprefix + this.qualityString + this.state.quality + "&"
        this.crusher()
        this.setState({url: this.imgURL })
        event.preventDefault()
    }

    bgalphaChange = (event) => {
        this.setState({bgalpha: event.target.value})
    }

    bgalphaSubmit = (event) => {
        this.bgalphaQS = this.urlprefix + this.bgalphaString + this.state.bgalpha + "&"
        this.crusher()
        this.setState({url: this.imgURL })
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
                    {this.methods.map((element, index) => { 
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
                    {this.bgtypes.map((element, index) => { 
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
                <pre>?{this.queryString}</pre>                             
            </div>
        )}
}

export default Imglist