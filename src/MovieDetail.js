import React, { Component } from 'react';
import './MovieDetail.css';

class MovieDetail extends Component {

  state = {};

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: data
        });
      })
      .catch(error => {
        console.log(`An error has occurred: ${error}`);
      });
  }

  render() {
    return (
      <>
        <div className="movie-detail">MovieDetail</div>
        {this.state.movie &&
        <div className="detail">
          <div className="label">Title</div>
          <div className="content">{this.state.movie.title}</div>
          <div className="label">Description</div>
          <div className="content">{this.state.movie.description}</div>
        </div>}
      </>
    );
  }
}

export default MovieDetail;