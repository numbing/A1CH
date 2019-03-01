import React, { Component } from "react";
import CarCard from "./CarCard";
import { connect } from "react-redux";
import { getCarsData, getCarPagination } from "../../actions/carAction";
import Loading from "./../Loading";
import Pagination from "./Pagination";

class CarContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      sortValue: ""
    };
  }

  componentDidMount() {
    this.props.getCarsData();
    this.props.getCarPagination(
      this.props.page,
      this.props.color,
      this.props.manufacturer,
      this.props.sort
    );
  }
  //OMG This is Awesome
  componentDidUpdate(prevProps) {
    if (
      this.props.page !== prevProps.page ||
      this.props.color !== prevProps.color ||
      this.props.manufacturer !== prevProps.manufacturer ||
      this.props.sort !== prevProps.sort
    ) {
      this.props.getCarPagination(
        this.props.page,
        this.props.color,
        this.props.manufacturer,
        this.props.sort
      );
    }
  }

  sortHandleter = e => {
    this.setState({
      sortValue: e.target.value
    });
  };

  render() {
    console.log("this.props", this.props);
    if (!this.props.cars) {
      return <Loading />;
    }

    this.props.history.push(
      `?page=${this.props.page}&color=${this.props.color}&manufacturer=${
        this.props.manufacturer
      }&sort=${this.state.sortValue}`
    );

    return (
      <div className="CarContainer">
        <div className="CarContainerWrapper">
          <div className="availbleCars">
            <h2 className="availbleCarsText">Available cars</h2>
            <h3>
              Showing {this.props.cars.length} of {this.props.totaleCount * 10}{" "}
              results
            </h3>
          </div>
          <div className="sortCars">
            <p>Sort by</p>
            <select onChange={this.sortHandleter} className="sortCarsSelect">
              <option value="asc">None</option>
              <option value="asc">asc</option>
              <option value="des">des</option>
            </select>
          </div>
        </div>
        <ul>
          {this.props.cars.map(e => (
            <li key={e.stockNumber}>
              {" "}
              <CarCard
                stockNumber={e.stockNumber}
                pictureUrl={e.pictureUrl}
                modelName={e.modelName}
                stock={e.stock}
                mileageNumber={e.mileage.number}
                unit={e.mileage.unit}
                fuelType={e.fuelType}
                color={e.color}
                manufacturerName={e.manufacturerName}
              />
            </li>
          ))}
        </ul>
        <Pagination
          first={`?page=1&color=${this.props.color}&manufacturer=${
            this.props.manufacturer
          }&sort=${this.state.sortValue}`}
          next={`?page=${this.props.page * 1 + 1}&color=${
            this.props.color
          }&manufacturer=${this.props.manufacturer}&sort=${
            this.state.sortValue
          }`}
          prev={`?page=${this.props.page * 1 - 1}&color=${
            this.props.color
          }&manufacturer=${this.props.manufacturer}&sort=${
            this.state.sortValue
          }`}
          last={`?page=${this.props.totaleCount}&color=${
            this.props.color
          }&manufacturer=${this.props.manufacturer}&sort=${
            this.state.sortValue
          }`}
          page={this.props.page}
          totalPageCount={this.props.totaleCount}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cars: state.dataReducer.data.cars,
  totaleCount: state.dataReducer.data.totalPageCount
});
export default connect(
  mapStateToProps,
  { getCarsData, getCarPagination }
)(CarContainer);
