import React, { Component } from 'react';
import axios from 'axios';

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: {}
    }
  }

  getWeatherConditions = async () => {
    const link = `${process.env.REACT_APP_SERVER_URL}/weather`;
    let response = await axios.get(link)
    this.setState({weather: response.data[0]});
    console.log(response);
  }


    render() {
      return (
        <div>
          <button onClick={this.getWeatherConditions}>Get Current Weather!</button>
          {this.state.weather && <h1>Weather : {this.state.weather.data} </h1>}
        </div>
      )
    }
  

}