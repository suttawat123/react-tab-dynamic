import { FETCH_CAR_MODEL } from "./types";

export const fetchCarModel = (cartypeid) => {
  return {
    type: FETCH_CAR_MODEL,
    cartypeid: cartypeid,
  };
};
