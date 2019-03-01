import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({
  pictureUrl,
  modelName,
  unit,
  fuelType,
  color,
  stockNumber,
  mileageNumber,
  manufacturerName
}) => {
  return (
    <div className="CarCard">
      <img className="carCardImage" src={pictureUrl} alt="carImage" />
      <div className="carCardData">
        <h1>
          {manufacturerName} {modelName}
        </h1>
        <p>
          Stock # {stockNumber}-{mileageNumber}
          {unit}-{fuelType} -{color}
        </p>
        <Link className="videDetailsLink" to={`/car-detail/${stockNumber}`}>
          View details
        </Link>
      </div>
    </div>
  );
};
export default CarCard;
