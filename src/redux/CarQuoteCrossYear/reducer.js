import { FETCH_CAR_QUOTE_CROSS_YEAR } from "./types";

const INITIAL_STATE = {
  dataQuoteCrossYear: {
    crossyear: true,
  },
};

const CarQuoteCrossYearReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAR_QUOTE_CROSS_YEAR:
      return {
        ...state,
        dataQuoteCrossYear: state.dataCarType,
      };

    default:
      return state;
  }
};

export default CarQuoteCrossYearReducer;
