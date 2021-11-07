import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class Details extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' } }>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.details.img}`} alt={'movie poster'}/>
        <Card.Body>
        <Card.Title>{this.props.details.original_title}</Card.Title>
        <Card.Text>{this.props.details.overview}</Card.Text>
        <li>vote average: {this.props.details.vote_average}</li>
        <li>vote count: {this.props.details.vote_count}</li>
        <li>popularity: {this.props.details.popularity}</li>
        <li>release date: {this.props.details.release_date}</li>
        </Card.Body>
        </Card> 
      </div>
    )
  }
}