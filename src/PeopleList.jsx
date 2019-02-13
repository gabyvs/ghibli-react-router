import React, { Component } from 'react';
import {Link}               from 'react-router-dom';
import './PeopleList.css';

class PeopleList extends Component {
  state = {
    people: []
  };

  loadPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(response => response.json())
      .then(data => {
        // localStorage.setItem('movies', JSON.stringify(data));
        this.setState({
          people: data
        });
      })
      .catch(error => {
        console.log(`An error occurred: ${error}`);
      });
  };

  componentDidMount() {
    let people = localStorage.getItem('people');
    if (people) {
      this.setState({
        people: people
      });
    } else {
      this.loadPeople();
    }

  }

  render() {
    let people = this.state.people.map(people => (
      <li key={people.id}>
        <Link to={`/people/${people.id}`}>
          <div className="person">{people.name}</div>
        </Link>
      </li>
    ));
    return (
      <div className="people-list">
        <div className="title">Our beloved people</div>
        <ul className="list">
          {people}
        </ul>
      </div>
    );
  }
}

export default PeopleList;