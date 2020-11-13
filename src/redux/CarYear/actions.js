import { FETCH_CAR_YEAR } from "./types";

export const fetchCarYear = (model) => {
  return {
    type: FETCH_CAR_YEAR,
    model: model,
  };
};
