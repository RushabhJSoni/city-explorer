import React, { Component } from 'react';
import axios from 'axios';
import Alert  from 'react-bootstrap/Alert';

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: {},
      error: false,
      
    }
  }

  getWeatherConditions = async () => {

    try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.lat}&lon=${this.props.lon}`);
    
        this.setState({weather: response.data[0]});
        console.log(response);
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
          {this.state.weather && <h1> Visibility: {this.state.weather.vis} Wind Direction : {this.state.weather.wind_cdir} Wind Speed: {this.state.weather.wind_spd}  </h1>}
        </div>
      )
    }
  

}