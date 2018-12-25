import React, { Component } from 'react'
import { fetchWeather } from '../actions/fetchWeather'
import { connect } from 'react-redux'

class Weather extends Component {
    componentDidMount() {
        let { cityName, countryCode } = { cityName: 'Austin', countryCode:'US' }
        this.props.fetchWeather(cityName, countryCode)
    }
    render() {
        console.log(this.props.weather)
        return (<div>...</div>)
    }
}

const mapStateToProps = state => ({ weather: state.weather })

export default connect(mapStateToProps, { fetchWeather })(Weather)