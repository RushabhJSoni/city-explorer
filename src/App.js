import React, { Component } from "react";
import axios from 'axios';
import { render } from "@testing-library/react";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

export default class App extends
Component {

  constructor(props) {
    super(props)
    this.state = {
      cityName : '',
      error: false,
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

 handleChange = (e) => {
   
   this.setState({cityName: e.target.value})
 }

 

render() {
  return (
      <div>
        
        <h2>Enter City name you would like to learn the coordinates and look at a static map for!</h2>
        <input onChange = {this.handleChange} value = {this.state.cityName}/>
        <Button  variant="success" onClick={this.handleClick}>Explore!</Button>
        {this.state.location &&<h1>Name : {this.state.location.display_name} Latitude = {this.state.location.lat}, Longitude = {this.state.location.lon}</h1>}

        {this.state.location &&<img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=300x300&zoom=11`}/>}

        {this.state.error && <Alert variant="danger" onClose={() => this.setState({error: true})} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>

        </p>
      </Alert>}
      </div>
    )
  }
}