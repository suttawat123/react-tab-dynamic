import { FETCH_CAR_SUB_MODEL } from "./types";

const INITIAL_STATE = {
  dataCarSubModel: [
    {
      model: "4RUNNE",
      year: 1996,
      submodel: "4RUNNE 2959cc  AT",
      submodeldetail: [
        {
          carcapital: 211200,
          carmodelid: "TOYO96DC",
          engineid: "MQEZ0000003",
          machine_cc: 2959,
          machine_cc_short: 3,
          model_description: "Wagon 4dr Auto 4sp RWD 3.0i (CBU)",
          model_type: "",
          modelafs: "4RUNNE 3.0 96DC",
          salepricegood: 264000,
          submodelimage: null,
        },
      ],
    },
    {
      model: "CAMEO",
      year: 1995,
      submodel: "CAMEO 2499cc  Man",
      submodeldetail: [
        {
          carcapital: 144800,
          carmodelid: "ISUZ95AH",
          engineid: "MQEZ0000003",
          machine_cc: 2499,
          machine_cc_short: 2,
          model_description: "TF Wagon 4dr Man 5sp RWD 2.5D",
          model_type: "",
          modelafs: "CAMEO 2.5 95AH",
          salepricegood: 181000,
          submodelimage: null,
        },
      ],
    },
    {
      model: "ACCORD",
      year: 2018,
      submodel: "ACCORD 1993cc Hybrid TECH CVT",
      submodeldetail: [
        {
          carcapital: 1198400,
          carmodelid: "HOND18BL",
          engineid: "MQEZ0000004",
          machine_cc: 1993,
          machine_cc_short: 2,
          model_description: "MY16 Sedan 4dr Hybrid TECH i-VTEC CVT FWD 2.0i",
          model_type: "Hybrid TECH",
          modelafs: "ACCORD 2.0 18BL",
          salepricegood: 1498000,
          submodelimage: null,
        },
      ],
    },
    {
      model: "ACCORD",
      year: 2018,
      submodel: "ACCORD 1993cc Hybrid CVT",
      submodeldetail: [
        {
          carcapital: 1081600,
          carmodelid: "HOND18BK",
          engineid: "MQEZ0000004",
          machine_cc: 1993,
          machine_cc_short: 2,
          model_description: "MY16 Sedan 4dr Hybrid i-VTEC CVT FWD 2.0i",
          model_type: "Hybrid",
          modelafs: "ACCORD 2.0 18BK",
          salepricegood: 1352000,
          submodelimage: null,
        },
      ],
    },
  ],
};

const CarSubModelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAR_SUB_MODEL:
      var data = state.dataCarSubModel.filter(c => c.model === action.model && c.year === action.year);
      return {
        ...state,
        dataCarSubModel: data,
      };

    default:
      return state;
  }
};

export default CarSubModelReducer;
