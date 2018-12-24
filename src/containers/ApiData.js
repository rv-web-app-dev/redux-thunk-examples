import React, { Component } from 'react'
import { fetchApiData } from '../actions'
import { connect } from 'react-redux'

class ApiData extends Component {
    componentDidMount(){
        this.props.fetchApiData()
    }
    render() {
        console.log(this.props.apiData)
        return (<div>...</div>)
    }
}

const mapStateToProps = state => ({ apiData: state.apiData })

export default connect(mapStateToProps, { fetchApiData })(ApiData)