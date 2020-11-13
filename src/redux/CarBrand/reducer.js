import { FETCH_CAR_BRAND } from "./types";

const INITIAL_STATE = {
  dataCarBrand: [
    {
      cartypeid: "MQCT0000008",
      brandimage: "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AACYA0",
      carbrandid: "MQCB0000007",
      carbrandname: "TOYOTA",
    },
    {
      cartypeid: "MQCT0000008",
      brandimage: "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AABZrU",
      carbrandid: "MQCB0000001",
      carbrandname: "ISUZU",
    },
    {
      cartypeid: "MQCT0000008",
      brandimage: "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AACK/k",
      carbrandid: "MQCB0000026",
      carbrandname: "HONDA",
    },
  ],
};

const CarBrandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAR_BRAND:
      var data = state.dataCarBrand.filter(
        (c) => c.carbrandid === action.carbrandid
      );
      return {
        ...state,
        dataCarBrand: data,
      };

    default:
      return state;
  }
};

export default CarBrandReducer;
