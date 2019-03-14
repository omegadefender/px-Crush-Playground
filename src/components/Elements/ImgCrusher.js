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
        this.downloadFormat = ['Choose File Format', 'auto', 'jpeg', 'webp', 'png', 'gif']
        this.downloadFormatString = 'format='
        this.downloadFormatQS = ''        
    }

    imgCrusher = () => { 
        const uncleanQS = this.methodQS + this.widthQS + this.heightQS + this.qualityQS + this.bgcolorQS + this.bgtypeQS + this.bgalphaQS + this.downloadFormatQS
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
        this.heightQS = this.urlprefix + this.heightString + event.target.value + "&"
        this.imgCrusher()
        event.preventDefault()
    }

    qualityChange = (event) => {
        this.setState({quality: event.target.value})
        this.qualityQS = this.urlprefix + this.qualityString + event.target.value + "&"
        this.imgCrusher()
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
        this.bgalphaQS = this.urlprefix + this.bgalphaString + event.target.value + "&"
        this.imgCrusher()
        event.preventDefault()
    }

    downloadFormatChange = (event) => {
        const dlformat = this.downloadFormat.find(d => d === event.target.value)
        this.downloadFormatQScalculator(dlformat)
        this.imgCrusher()
    }

    downloadFormatQScalculator = (dlf) => {
        if (dlf === 'Choose File Format')
            this.downloadFormatQS = ''
        else
            this.downloadFormatQS = this.urlprefix + this.downloadFormatString + dlf + "&"
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
                    <input id="widthSlider" type="range" min="16" max="4000" step="1" onChange={this.widthChange} value={this.state.width}/>
                </form>
                <form id="height">HEIGHT
                    <input id="heightSlider" type="range" min="16" max="4000" step="1" onChange={this.heightChange} value={this.state.height}/>
                </form>
                <form id="quality">QUALITY                    
                    <input id="qualitySlider" type="range" min="50" max="90" step="1" onChange={this.qualityChange} value={this.state.quality}/>
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
                    <input id="bgalphaSlider" type="range" min="0" max="100" step="1" onChange={this.bgalphaChange} value={this.state.bgalpha}  />
                </form>
                <select id="downloadFormat-list" onChange={this.downloadFormatChange}>
                    {this.downloadFormat.map((element, index) => { 
                        return <option value={element} key={index} >{element}</option>
                    })}
                </select>
                <div id="qsholder">
                    <pre>?{this.queryString}</pre> 
                </div>                                         
            </div>
        )}
}

export default Imgcrusher