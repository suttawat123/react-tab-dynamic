import { FETCH_CAR_BRAND,  } from "./types";

export const fetchCarBrand = (cartypeid) => {
  return {
    type: FETCH_CAR_BRAND,
    cartypeid: cartypeid,
  };
};

