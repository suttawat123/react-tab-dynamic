import { FETCH_CAR_SUB_MODEL } from "./types";

export const fetchCarSubModel = (submodel) => {
  return {
    type: FETCH_CAR_SUB_MODEL,
    submodel: submodel,
   
  };
};
