import React, { Component } from "react";
import { connect } from "react-redux";
import { getCarData } from "../../actions/carAction";
import CarDetailSidebar from "./CarDetailSidebar";
import CarDetailSaveCar from "./carDetailSaveCar";
import Loading from "../Loading";

class CarDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      stockNumber: 0
    };
  }

  componentDidMount() {
    this.props.getCarData(this.props.match.params.id);
  }
  saveButtonHandler = () => {
    this.setState({
      stockNumber: localStorage.setItem(
        "stockNumber",
        this.props.car.stockNumber
      )
    });
  };

  render() {
    if (!this.props.car) {
      return <Loading />;
    }
    return (
      <div className="carDetail">
        <img
          className="CarDetailImg"
          src={this.props.car.pictureUrl}
          alt="CarDetailImg"
        />

        <div className="carDetailWraper">
          <CarDetailSidebar
            manufacturerName={this.props.car.manufacturerName}
            modelName={this.props.car.modelName}
            stockNumber={this.props.car.stockNumber}
            number={this.props.car.mileage.number}
            unit={this.props.car.mileage.unit}
            color={this.props.car.color}
            fuelType={this.props.car.fuelType}
          />
          <CarDetailSaveCar saveButtonHandler={this.saveButtonHandler} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  car: state.dataReducer.data.car
});
export default connect(
  mapStateToProps,
  { getCarData }
)(CarDetail);
