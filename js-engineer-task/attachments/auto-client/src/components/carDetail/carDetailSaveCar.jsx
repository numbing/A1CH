import React from "react";

const CarDetailSaveCar = ({ saveButtonHandler }) => {
  return (
    <div className="carDetailSaveCar">
      <p className="carSaveText">
        If you like this car, click the button and save it in your collection of
        favourite items.
      </p>
      <button onClick={saveButtonHandler} className="saveButton">
        Save
      </button>
    </div>
  );
};

export default CarDetailSaveCar;
