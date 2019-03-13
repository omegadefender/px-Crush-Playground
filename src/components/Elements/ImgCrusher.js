import React from 'react'
import '../../css_files/ImgCrusher.css'

const images = [
    { name: 'Choose an Image', url: '' },
    { name: 'African Elephant', url: 'https://zw5alevhy0za-stg.pxcrush.net/african-elephant-animal-big-1772737.jpg' },
    { name: 'Orangutan', url: 'https://zw5alevhy0za-stg.pxcrush.net/animal-animal-photography-ape-1785283.jpg' },
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
    { name: 'Kingfisher', url: 'https://zw5alevhy0za-stg.pxcrush.net/avian-beak-bird-416117.jpg' },
    { name: 'Grasshopper', url: 'https://zw5alevhy0za-stg.pxcrush.net/close-up-grasshopper-hd-wallpaper-59981.jpg' },
    { name: 'Sqirrel', url: 'https://zw5alevhy0za-stg.pxcrush.net/fence-macro-park-1320459.jpg' }
]

class Imgcrusher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            name: '',
            width: '',
            height: '',
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
        this.methods = ['Choose a Method', 'fit', 'fitfill', 'limit', 'limitfill', 'crop', 'trim', 'gravity', 'gravityfill', 'gravityshow']
        this.methodString = 'method='
        this.methodQS = ''
        this.bgcolors = [   
            { name: 'Choose a Background Color', code: 'none' },
            { name: 'White', code: 'ffffff' }, 
            { name: 'Black', code: '000000' },
            { name: 'Blue', code: '0000FF' },
            { name: 'Red', code: 'ff0000' },
            { name: 'Green', code: '008000' },
            { name: 'Yellow', code: 'ffff00' }
        ]
        this.bgcolorString = 'bgcolor='
        this.bgcolorQS = ''
        this.bgtypes = ['Choose a Background Type', 'self', 'color']
        this.bgtypeString = 'bgtype='
        this.bgtypeQS = ''
        this.qualityString = 'quality='
        this.qualityQS = ''
        this.bgalphaString = 'bgalpha='
        this.bgalphaQS = ''        
    }

    imgCrusher = () => { 
        const uncleanQS = this.methodQS + this.widthQS + this.heightQS + this.qualityQS + this.bgcolorQS + this.bgtypeQS + this.bgalphaQS
        this.queryString = uncleanQS.slice(0, -1)    
        this.imgURL = this.baseURL + this.queryString
        this.setState({url: this.imgURL})
    }

    imgSelector = (event) => {
        this.queryString = ''  
        const imgname = event.target.value
        this.baseURL = images.find(x => x.name === imgname).url + "?"
        this.setState({url: this.baseURL, name: imgname})
        event.preventDefault()
    }

    methodSelect = (event) => {
        const methSelected = this.methods.find(m => m === event.target.value)
        this.methQScalculator(methSelected)
        this.imgCrusher()
        event.preventDefault()
    }

    methQScalculator = (methType) => {
        if (methType === 'Choose a Method')
            this.methodQS = ''
        else 
            this.methodQS = this.urlprefix + this.methodString + methType + "&"      
    }

    widthChange = (event) => {
        this.setState({width: event.target.value})
        this.widthQS = this.urlprefix + this.widthString + event.target.value + "&"
        this.imgCrusher()        
        event.preventDefault()
    } 

    heightChange = (event) => {
        this.setState({height: event.target.value})
        this.heightQS = this.urlprefix + this.heightString + this.state.height + "&"
        this.imgCrusher()
        this.setState({url: this.imgURL })
        event.preventDefault()
    }

    qualityChange = (event) => {
        this.setState({quality: event.target.value})
        this.qualityQS = this.urlprefix + this.qualityString + this.state.quality + "&"
        this.imgCrusher()
        this.setState({url: this.imgURL })
        event.preventDefault()
    }    

    bgcolorChange = (event) => {
        const bgcolorcode = this.bgcolors.find(c => c.name === event.target.value).code
        this.bgcolorQScalculator(bgcolorcode)
        this.imgCrusher()
        event.preventDefault()
    }

    bgcolorQScalculator = (colorHex) => {
        if (colorHex === 'none')
            this.bgcolorQS = ''
        else 
            this.bgcolorQS = this.urlprefix + this.bgcolorString + colorHex + "&" 
    }

    bgtypeSelect = (event) => {
        const bgtypeSelected = this.bgtypes.find(b => b === event.target.value)
        this.bgtypeQScalculator(bgtypeSelected)
        this.imgCrusher()
    }   

    bgtypeQScalculator = (bgType) => {
        if (bgType === 'Choose a Background Type')
            this.bgtypeQS = ''
        else 
            this.bgtypeQS = this.urlprefix + this.bgtypeString + bgType + "&" 
    }

    bgalphaChange = (event) => {
        this.setState({bgalpha: event.target.value})
        this.bgalphaQS = this.urlprefix + this.bgalphaString + this.state.bgalpha + "&"
        this.imgCrusher()
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <img src={this.state.url} alt={this.state.name}></img>
                <select id="image-list" onChange={this.imgSelector}>
                    {images.map((element, index) => { 
                        return <option value={element.name} key={index} >{element.name}</option>
                    })}
                </select>
                <select id="methods-list" onChange={this.methodSelect}>
                    {this.methods.map((element, index) => { 
                        return <option value={element} key={index} >{element}</option>
                    })}
                </select>           
                <form id="width">WIDTH
                    <input type="range" min="10" max="1500" onChange={this.widthChange} value={this.state.width} id="widthSlider" />
                </form>
                <form id="height">HEIGHT
                    <input type="range" min="10" max="1500" onChange={this.heightChange} value={this.state.height} id="heightSlider" />
                </form>
                <form id="quality">QUALITY                    
                    <input type="range" min="49" max="91" onChange={this.qualityChange} value={this.state.quality} id="qualitySlider" />
                </form>
                <select id="bgcolor-list" onChange={this.bgcolorChange} >
                    {this.bgcolors.map((element, index) => {
                        return <option value={element.name} key={index} >{element.name}</option>
                    })}
                </select>
                <select id="bgtype-list" onChange={this.bgtypeSelect}>
                    {this.bgtypes.map((element, index) => { 
                        return <option value={element} key={index} >{element}</option>
                    })}
                </select>
                <form id="bgalpha">BG ALPHA                    
                    <input type="range" min="0" max="100" onChange={this.bgalphaChange} value={this.state.bgalpha} id="bgalphaSlider" />
                </form>
                <div id="qsholder">
                    <pre>?{this.queryString}</pre> 
                </div>                                         
            </div>
        )}
}

export default Imgcrusher