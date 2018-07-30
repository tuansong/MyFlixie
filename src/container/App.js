import React, { Component } from 'react';
import './App.css';
import { MovieList } from '../components/MovieList';
import Headers from '../components/Header';

import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MovieModal } from '../components/MovieModal';

library.add(faSearch);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: true,
      currentPage: 1
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.sortRatingHandler = this.sortRatingHandler.bind(this);
    this.sortDateHandler = this.sortDateHandler.bind(this);
  }

  componentWillMount() {
    setTimeout(() => this.loadSpinner(), 0);
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.keyId}&language=en-US&page=1`)
      .then(res => {
        this.setState({
          movies: res.data.results,
          cloneMovies: res.data.results
        })
      })
      .catch(error => console.log(error));
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.setState({
          currentPage: this.state.currentPage + 1
        })
        // you're at the bottom of the page
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.keyId}&language=en-US&page=${this.state.currentPage}`)
          .then(res => {
            let movies = this.state.movies;
            let updatedMovies = movies.concat(res.data.results);
            console.log(updatedMovies);
            this.setState({
              movies: updatedMovies,
              cloneMovies: updatedMovies
            })
          })
      }
    })

  }


  loadSpinner() {
    this.setState({
      spinner: false
    });
    console.log(this.state.spinner);
  }

  searchHandler(e) {
    let input = e.target.value;
    let movies = this.state.cloneMovies;
    let result = movies.filter(
      movie => movie.title.includes(input.charAt(0).toUpperCase() + input.slice(1))
    );
    this.setState({
      movies: result
    });
  }

  sortRatingHandler() {
    let movies = this.state.cloneMovies;
    let sortedMovies = movies.sort(this.sortRating);
    this.setState({
      movies: sortedMovies
    })
    console.log(sortedMovies);
  }

  sortRating(a, b) {
    return b.vote_average - a.vote_average;
  }

  sortDateHandler() {
    let movies = this.state.cloneMovies;
    let sortedMovies = movies.sort(this.sortDate);
    this.setState({
      movies: sortedMovies
    })
    console.log(sortedMovies);
  }

  sortDate(a, b) {
    if (a.release_date < b.release_date) {
      return -1;
    }
    if (a.release_date > b.release_date) {
      return 1;
    }
    return 0;
  }

  loadMovieHandler(i) {
    this.setState({
      showedMovie: this.state.movies[i]
    })
    console.log(this.state.movies[i]);
  }

  render() {
    let spinner = <ClipLoader color={'#abc123'} loading={this.state.spinner} />;
    let movies = this.state.movies && this.state.movies.map((movie, index) => {
      return <MovieList
        {...movie}
        key={movie.id}
        clicked={() => this.loadMovieHandler(index)} />
    });

    return (
      <div>
        <Headers searchHandler={this.searchHandler}
          sortDateHandler={this.sortDateHandler}
          sortRatingHandler={this.sortRatingHandler} />
        <div className="App container">
          {this.state.spinner ?
            <div className="text-center">
              {spinner}
            </div>
            :
            <div>
              <div className>
                <div className="card-deck d-flex justify-content-center mt-5">
                  {movies}
                </div>
                {this.state.showedMovie ?
                  <MovieModal
                    title={this.state.showedMovie.title}
                    body={this.state.showedMovie.overview}
                    link={this.state.showedMovie.backdrop_path}
                    date={this.state.showedMovie.release_date}
                    point={this.state.showedMovie.vote_average}
                    vote={this.state.showedMovie.vote_count} />
                  : null}
              </div>
            </div>}
        </div>
      </div>
    );
  }
}


export default App;
