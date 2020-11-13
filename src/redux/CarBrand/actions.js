import { FETCH_CAR_BRAND,  } from "./types";

export const fetchCarBrand = (carbrandid) => {
  return {
    type: FETCH_CAR_BRAND,
    carbrandid: carbrandid,
  };
};

