import axios from "axios";

export const getCarsData = () => dispatch => {
  dispatch(setDataLoading());
  axios.get("http://localhost:3001/cars").then(res =>
    dispatch({
      type: "GET_DATA",
      payload: res.data
    })
  );
};

export const getCarData = id => dispatch => {
  dispatch(setDataLoading());
  axios.get(`http://localhost:3001/cars/${id}`).then(res =>
    dispatch({
      type: "GET_CAR_DATA",
      payload: res.data
    })
  );
};

export const getCarPagination = (
  page,
  color,
  manufacturer,
  sort
) => dispatch => {
  dispatch(setDataLoading());
  axios
    .get(
      `http://localhost:3001/cars?page=${page}&color=${color}&manufacturer=${manufacturer}&sort=${sort}`
    )
    .then(res =>
      dispatch({
        type: "GET_CAR_PAGINATION",
        payload: res.data
      })
    );
};

export const getColors = () => dispatch => {
  dispatch(setDataLoading());
  axios.get(`http://localhost:3001/colors`).then(res =>
    dispatch({
      type: "GET_COLORS",
      payload: res.data
    })
  );
};
export const getManufacturers = () => dispatch => {
  dispatch(setDataLoading());
  axios.get(`http://localhost:3001/manufacturers`).then(res =>
    dispatch({
      type: "GET_MANUFACTURERS",
      payload: res.data
    })
  );
};

export const setDataLoading = () => {
  return {
    type: "DATA_LOADING"
  };
};
