import React, { Component } from 'react'
import { fetchWeather } from '../actions/fetchWeather'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    componentDidMount() {
        let { cityName, countryCode } = { cityName: 'Austin', countryCode: 'US' }
        this.props.fetchWeather(cityName, countryCode)
    }

    renderList(weather = { city: { name: 'Unavailable' }, list: [] }) {
        let { city: { name }, list } = weather
        let temperature = [], humidity = [], pressure = []
        console.log(name, list.length)
        list.forEach(data => {
            temperature.push(data.main.temp);
            humidity.push(data.main.humidity);
            pressure.push(data.main.pressure);
        })
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Sparklines data={temperature} height={65}><SparklinesLine color="blue" /></Sparklines></td>
                <td><Sparklines data={humidity} height={100}><SparklinesLine color="green" /></Sparklines></td>
                <td><Sparklines data={pressure} height={100}><SparklinesLine color="brown" /></Sparklines></td>
            </tr>
        )
    }

    render() {
        let { weather } = this.props
        // Conditional rendering, whenever the props is NULL.
        if (weather.length === 0) {
            return (<div>No weather data obtained from server !!</div>)
        }
        // Else do the below ...

        return (
            <div>
                <p></p>
                <table className="tableStyle">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature(k)</th>
                            <th>Humidity</th>
                            <th>Pressure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList(weather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ weather: state.weather })

export default connect(mapStateToProps, { fetchWeather })(Weather)