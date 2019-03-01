import React from "react";

const SortCars = sortHandleter => {
  console.log("sortHandleter", sortHandleter);
  return (
    <div className="sortCars">
      <p>Sort by</p>
      <select onChange={sortHandleter} className="sortCarsSelect">
        <option value="asc">None</option>
        <option value="asc">asc</option>
        <option value="des">des</option>
      </select>
    </div>
  );
};
export default SortCars;
