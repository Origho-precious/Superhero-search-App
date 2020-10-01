import React, { Component } from 'react';
import Header from "../../components/header";
import Herocard from '../../components/herocard';

class Homepage extends Component {
  state = {
    data: ''
  };

  setData = (data) => {
    this.setState({ data });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <Header setData={this.setData} />
        <section className=" container mt-2">
          <h1 className="display-4">{data ? 'Results' : null}</h1>
          <div className='my-5 row'>
            {
              data ? data.results.map((hero, id) => {
                return (
                  <Herocard className='col-lg-6' key={id} data={hero} />
                )
              }) : null
            }
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;