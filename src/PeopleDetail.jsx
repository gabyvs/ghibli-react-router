import React, { Component } from 'react';
import './MovieDetail.css';

class PeopleDetail extends Component {

  state = {};

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          people: data
        });
      })
      .catch(error => {
        console.log(`An error has occurred: ${error}`);
      });
  }

  render() {
    return (
      <>
        <div className="people-detail">People Detail</div>
        {this.state.people &&
        <div className="detail">
          <div className="label">Name</div>
          <div className="content">{this.state.people.name}</div>
          <div className="label">Gender</div>
          <div className="content">{this.state.people.gender}</div>
        </div>}
      </>
    );
  }
}

export default PeopleDetail;