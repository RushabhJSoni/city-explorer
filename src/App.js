import React, { Component } from "react";
import axios from 'axios';
import { Button, Alert } from "react-bootstrap";
import Weather from "./Weather.js";
import Movies from "./Movies.js"

export default class App extends
Component {

  constructor(props) {
    super(props)
    this.state = {
      cityName : '',
      error: false,
      weather: {},
    }
  }

  handleClick = async () => {

    const link = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityName}&format=json`;
   
  try {
    let response = await axios.get(link);
    this.setState({location: response.data[0]})
    console.log(response);
  } catch (e) {
    console.error(e);
    this.setState({error: true})
  }
}

getWeatherConditions = async () => {
  try {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`);
      this.setState({weather: response.data[0]});
      console.log(response);
  } catch(e) {
    this.setState({error: true});
  }
}


 handleChange = (e) => {
   
   this.setState({cityName: e.target.value})
 }

render() {
  return (
      <div style={{backgroundColor: "#e6ffff", width: "auto"}} class="mx-auto" >
        
        <h2>Enter City name you would like to learn the coordinates and look at a static map for!</h2>
        <input onChange = {this.handleChange} value = {this.state.cityName}/>
        <Button  variant="success" onClick={this.handleClick}>Explore!</Button>
        {this.state.location &&<h1>Name : {this.state.location.display_name} Latitude = {this.state.location.lat}, Longitude = {this.state.location.lon}</h1>}

        {this.state.location &&<img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=300x300&zoom=11`} alt="map"/>}

        {this.state.error && <Alert variant="danger" onClose={() => this.setState({error: false})} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        </Alert>}
        {this.state.location && <Weather weather={this.state.weather} getWeatherConditions={this.getWeatherConditions}/>}
        {this.state.location && <Movies q={this.state.cityName}/>}
        
      </div>
    )
    
  }
}