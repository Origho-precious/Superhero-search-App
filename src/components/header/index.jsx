import React, { Component } from 'react';
import styles from "./header.module.css";
import axios from "axios";

class Header extends Component {
  state = {
    term: "",
    apiKey: "555566405345556",
  };

  searchHandler = async (e) => {
    e.preventDefault();

    const { term, apiKey } = this.state;
    const { setData } = this.props;

    this.setState({ term: '' });

    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/search/${term}`
    );

    setData(response.data);
  };

  render() {
    const { term } = this.state;
    
    return (
      <div className="text-center">
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-1">Superheroes</h1>
          <p className="lead">Search for your favorite Superheroes here!</p>
          <form onSubmit={this.searchHandler} className={styles.form}>
            <div className="form-group row mt-5">
              <input
                onChange={(e) => this.setState({ term: e.target.value })}
                value={term}
                type="text"
                className="form-control form-control-lg col-lg-8"
                placeholder="Enter superhero name!"
              />
              <button
                className="btn btn-primary btn-lg px-4 ml-2 col-lg-3"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;