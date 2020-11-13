import { FETCH_CAR_MODEL } from "./types";

export const fetchCarModel = (carbrandid) => {
  return {
    type: FETCH_CAR_MODEL,
    carbrandid: carbrandid,
  };
};
