import React, { Component } from "react";
import CarContainer from "../components/carcard/CarContainer";
import FilterContainer from "../components/FilterContainer/filterContainer";
const queryString = require("query-string");

class Home extends Component {
  nextTest = () => {
    let query = queryString.parse(this.props.location.search);
  };
  render() {
    let query = queryString.parse(this.props.location.search);

    return (
      <div className="Home">
        <FilterContainer history={this.props.history} />
        <CarContainer
          color={query.color}
          page={query.page}
          manufacturer={query.manufacturer}
          sort={query.sort}
          history={this.props.history}
        />
      </div>
    );
  }
}
export default Home;
