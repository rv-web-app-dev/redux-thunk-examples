import React, { Component } from 'react'
import { fetchRandomImages } from '../actions/fetchImages'
import { connect } from 'react-redux'

class Images extends Component {
    constructor(props){
        super(props)
        this.state={
            term:''
        }
    }
    componentDidMount() {
        this.props.fetchRandomImages()
    }
    render() {
        let imageElements = this.props.randomImages.map(image => {
            return (<li className="each-item" key={image.id}><img className="each-image" src={image.urls.small} alt={image.description} /></li>
        )
        })
        return (<div>{imageElements.length > 0 ? <ul className="img-container">{imageElements}</ul> : null}</div>)
    }
}

const mapStateToProps = state => ({ randomImages: state.randomImages })

export default connect(mapStateToProps, { fetchRandomImages })(Images)