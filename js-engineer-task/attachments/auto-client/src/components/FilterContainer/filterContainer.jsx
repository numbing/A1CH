import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../Loading";
import { getColors, getManufacturers } from "../../actions/carAction";

class FilterContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      colorValue: "",
      manufacturersValue: ""
    };
  }
  componentDidMount() {
    this.props.getColors();
    this.props.getManufacturers();
  }

  handleColorValue = e => {
    this.setState({
      colorValue: e.target.value
    });
  };
  handleManufacturerValue = e => {
    this.setState({
      manufacturersValue: e.target.value
    });
  };

  render() {
    if (!this.props.colors || !this.props.manufacturers) {
      return <Loading />;
    }

    this.props.history.push(
      `?page=1&color=${this.state.colorValue}&manufacturer=${
        this.state.manufacturersValue
      }&sort=`
    );

    return (
      <div className="FilterContainer">
        <div className="FilterWraper">
          <p>Color</p>
          <select className="FilterColors" onChange={this.handleColorValue}>
            <option value="All car colors ">All car colors</option>
            {this.props.colors.map(e => (
              <option value={e} key={e}>
                {e}
              </option>
            ))}
          </select>

          <p>Manufacturer</p>
          <select
            className="FilterManufacturer"
            onChange={this.handleManufacturerValue}
          >
            <option value="All manufacturer">All manufacturer</option>
            {this.props.manufacturers.map(e => (
              <option value={e.name} key={e.name}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state.dataReducer.colors.colors,
  manufacturers: state.dataReducer.manufacturers.manufacturers
});

export default connect(
  mapStateToProps,
  { getColors, getManufacturers }
)(FilterContainer);
