import { FETCH_CAR_YEAR } from "./types";

const INITIAL_STATE = {
  dataCarYear: [
    {
      model: "4RUNNE",
      year: 1996,
    },
    {
      model: "4RUNNE",
      year: 1995,
    },
    {
      model: "CAMEO",
      year: 1995,
    },
    {
      model: "CAMEO",
      year: 1994,
    },
    { model: "ACCORD", year: 2018 },
    {
      model: "ACCORD",
      year: 2017,
    },
  ],
};

const CarYearReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAR_YEAR:
      var data = state.dataCarYear.filter(c => c.model === action.model);
      return {
        ...state,
        dataCarYear: data,
      };

    default:
      return state;
  }
};

export default CarYearReducer;
