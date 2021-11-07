import React, { Component } from 'react';
import Alert  from 'react-bootstrap/Alert';
import OneDayWx from './OneDayWx.js'

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      
    }
  }

     render() {
      return (
        <div>
          {this.state.error && <Alert variant="danger" onClose={() => this.setState({error: false})} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        </Alert>}
        <button onClick={this.props.getWeatherConditions}>Get Current Weather!</button>
          <OneDayWx weather={this.props.weather}/>
        </div>
      )
  }
}