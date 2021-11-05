import React, { Component } from 'react';
import axios from 'axios';
import Alert  from 'react-bootstrap/Alert';
import SortedList from './SortedList.js'

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
          {this.state.movies && this.state.movies.map(results => <SortedList key={results.id} details={results}/>)}
        </div>
      )
  }

}