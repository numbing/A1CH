const initalState = {
  data: "",
  colors: "",
  manufacturers: ""
};

export const dataReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        loading: true,
        data: action.payload
      };

    case "GET_CAR_DATA":
      return {
        ...state,
        loading: true,
        data: action.payload
      };
    case "GET_CAR_PAGINATION":
      return {
        ...state,
        loading: true,
        data: action.payload
      };
    case "GET_COLORS":
      return {
        ...state,
        loading: true,
        colors: action.payload
      };
    case "GET_MANUFACTURERS":
      return {
        ...state,
        loading: true,
        manufacturers: action.payload
      };

    default:
      return state;
  }
};
