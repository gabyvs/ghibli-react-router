import React, { Component } from 'react';
import './MovieList.css';
import {Link}               from 'react-router-dom';

class MovieList extends Component {
  state = {
    movies: []
  };

  loadMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('movies', JSON.stringify(data));
        this.setState({
          movies: data
        });
      })
      .catch(error => {
        console.log(`An error occurred: ${error}`);
      });
  };

  componentDidMount() {
    let movies = localStorage.getItem('movies');
    if (movies) {
      this.setState({
        movies: JSON.parse(movies)
      });
    } else {
      this.loadMovies();
    }

  }

  render() {
    let movies = this.state.movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          <div className="movie">{movie.title}</div>
        </Link>
      </li>
    ));
    return (
      <div className="movie-list">
        <div className="title">Our beloved movies</div>
        <ul className="list">
          {movies}
        </ul>
      </div>
    );
  }
}

export default MovieList;