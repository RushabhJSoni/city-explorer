import React, { Component } from 'react';
import axios from 'axios';
import Alert  from 'react-bootstrap/Alert';

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: {},
      error: false
    }
  }

  getWeatherConditions = async () => {
    const link = `${process.env.REACT_APP_SERVER_URL}/weather?city=${this.props.city}`;
    try {
        let response = await axios.get(link)
        this.setState({weather: response.data[0]});
    } catch(e) {
      this.setState({error: true});
    }

  }

  

    render() {
      return (
        <div>
          {this.state.error && <Alert variant="danger" onClose={() => this.setState({error: false})} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        </Alert>}
          <button onClick={this.getWeatherConditions}>Get Current Weather!</button>
          {this.state.weather && <h1>Weather : Min Temp : {this.state.weather.min_temp} Max Temp : {this.state.weather.max_temp} Clouding : {this.state.weather.description}  </h1>}
        </div>
      )
    }
  

}