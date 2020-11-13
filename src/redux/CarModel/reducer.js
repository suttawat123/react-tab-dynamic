import { FETCH_CAR_MODEL } from "./types";

const INITIAL_STATE = {
  dataCarModel: [
    {
      carbrandid: "MQCB0000007",
      model: "4RUNNE",
      modelImage: null,
    },
    {
      carbrandid: "MQCB0000007",
      model: "AVANZA",
      modelImage: null,
    },
    {
      carbrandid: "MQCB0000007",
      model: "CAMRY",
      modelImage: null,
    },
    {
      carbrandid: "MQCB0000001",
      model: "CAMEO",
      modelImage: null,
    },
    {
      carbrandid: "MQCB0000001",
      model: "D-MAX",
      modelImage: null,
    },
    {
      carbrandid: "MQCB0000026",
      model: "ACCORD",
      modelImage: null,
    },
    {
      carbrandid: "MQCB0000026",
      model: "BRIO",
      modelImage: null,
    },
  ],
};

const CarModelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAR_MODEL:
      var data = state.dataCarModel.filter(c => c.cartypeid === action.cartypeid);
      return {
        ...state,
        dataCarModel: data,
      };

    default:
      return state;
  }
};

export default CarModelReducer;
