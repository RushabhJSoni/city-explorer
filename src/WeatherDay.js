import React, { Component } from 'react';

export default class WeatherDay extends Component {

    render() {
        return (
          <div>
              {this.props.weather && <h1> Visibility: {this.props.weather.vis} M,  Wind Direction : {this.props.weather.wind_cdir}, Wind Speed: {this.props.weather.wind_spd} MPH. </h1>}
          </div>
         )
    }
}