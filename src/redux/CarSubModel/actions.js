import { FETCH_CAR_SUB_MODEL } from "./types";

export const fetchCarSubModel = (model, year) => {
  return {
    type: FETCH_CAR_SUB_MODEL,
    model: model,
    year: year,
  };
};
