import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.details.original_title}</h1>
        <p>{this.props.details.overview}</p>
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.details.img}`} alt={'movie poster'}/>
        <li>vote average: {this.props.details.vote_average}</li>
        <li>vote count: {this.props.details.vote_count}</li>
        <li>popularity: {this.props.details.popularity}</li>
        <li>release date: {this.props.details.release_date}</li>
      </div>
    )
  }
}