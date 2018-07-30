import React, { Component } from 'react'
import { MovieBox } from './MovieBox';

export class MovieList extends Component {
  render() {
    return (
      <div>
        <MovieBox title={this.props.title}
                  overview={this.props.overview}
                  img={`https://image.tmdb.org/t/p/w342/${this.props.poster_path}`}
                  clicked={this.props.clicked}/>
      </div>
    )
  }
}

export default MovieList
