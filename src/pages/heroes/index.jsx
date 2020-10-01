import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import styles from './heroes.module.css';

class Heroes extends Component {
  state = {
    apiKey: "555566405345556",
    data: null,
  };

  async componentDidMount() {
    try {
      const { id } = this.props.match.params;

      const { apiKey } = this.state;

      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/${id}`
      );

      if (response) {
          this.setState({ data: response.data });
          console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  renderDetails = (data) => {
    if (data) {
      const { image, name, biography, connections, work, powerstats } = data;
        return (
          <>
            <Link to='/'>
                <p className="lead">Go back</p>
            </Link>          
            <h1 className="display-2 mb-3">{name}</h1>
            <div className={styles.row}>
              <img src={image.url} alt={name} />
              <div>
                <div>
                  <h3 className="text-primary text-bold">Biography</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="lead">Aliases: </span>{" "}
                      {biography.aliases.map((name, id) => {
                        return <span key={id}>{name}, </span>;
                      })}
                    </li>
                    <li className="list-group-item">
                      <span className="lead">Alignment:</span>{" "}
                      {biography.alignment}
                    </li>
                  </ul>
                </div>
                <div className="mt-3">
                  <h3 className="card-title text-primary text-bold">
                    Connections
                  </h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="lead">Relatives:</span>{" "}
                      {connections.relatives}
                    </li>
                  </ul>
                </div>
                <div className="mt-3">
                  <h3 className="card-title text-primary text-bold">Work</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="lead">Occupation:</span>{" "}
                      {work.occupation}
                    </li>
                    <li className="list-group-item">
                      <span className="lead">Base:</span> {work.base}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-2 d-flex align-items-center">
              <h3 className="card-title text-primary text-bold">Powerstats:</h3>
              <ul className="list-group list-group-flush d-flex flex-row">
                <li className="list-group-item">
                  Combat:{" "}
                  <span className="rounded-pill badge badge-danger">
                    {powerstats.combat}
                  </span>
                </li>
                <li className="list-group-item">
                  Durability:{" "}
                  <span className="rounded-pill badge badge-primary text-lg">
                    {powerstats.durability}
                  </span>
                </li>
                <li className="list-group-item">
                  Intelligence:{" "}
                  <span className="rounded-pill badge badge-warning">
                    {powerstats.intelligence}
                  </span>
                </li>
                <li className="list-group-item">
                  Power:{" "}
                  <span className="rounded-pill badge badge-secondary">
                    {powerstats.power}
                  </span>
                </li>
                <li className="list-group-item">
                  Speed:{" "}
                  <span className="rounded-pill badge badge-info">
                    {powerstats.speed}
                  </span>
                </li>
                <li className="list-group-item">
                  Strength:{" "}
                  <span className="rounded-pill badge badge-danger">
                    {powerstats.strength}
                  </span>
                </li>
              </ul>
            </div>
          </>
        );
    }
  };

  render() {
    return (
        <div className={styles.container}>
            {this.renderDetails(this.state.data)}
        </div>
    )
  }
}

export default withRouter(Heroes);
