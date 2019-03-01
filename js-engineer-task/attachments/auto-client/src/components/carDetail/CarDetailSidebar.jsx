import React from "react";

const CarDetailSidebar = ({
  manufacturerName,
  modelName,
  stockNumber,
  number,
  unit,
  color,
  fuelType
}) => {
  return (
    <div className="carDetailSidebar">
      <div>
        <h1>
          {manufacturerName} {modelName}
        </h1>
        <h3>
          Stock # {stockNumber} - {number}
          {unit} - {fuelType} -{color}
        </h3>
        <p>
          This car is currently available and can be delivered as soon as
          tomorrow morning. Please be aware that delivery times shown in this
          page are not definitive and may change due to bad weather conditions.
        </p>
      </div>
    </div>
  );
};

export default CarDetailSidebar;
