import React, { Component } from 'react';
import axios from 'axios';
import Alert  from 'react-bootstrap/Alert';
import Movie from './Movie.js'
import { Container, Row } from 'react-bootstrap';

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      error: false,
      
    }
  }

  getMovies = async () => {

    try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies?query=${this.props.q}`);
    
        this.setState({movies: response.data});
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
          <button onClick={this.getMovies}>Get Movies with city name!</button>
          {this.state.movies && <Container><Row sm={3}>{this.state.movies.map(results => <Movie key={results.id} details={results}/>)}</Row></Container>} 
        </div>
      )
  }

}