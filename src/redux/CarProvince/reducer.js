import { FETCH_CAR_PROVINCE } from "./types";

const INITIAL_STATE = {
  dataProvince: [
    { provincekey: 1, provincenameth: "กรุงเทพมหานคร", provinceshort: "กท" },
    { provincekey: 2, provincenameth: "สมุทรปราการ", provinceshort: "สป" },
    {
      provincekey: 3,
      provincenameth: "นนทบุรี",
      provinceshort: "นบ",
    },
  ],
};

const CarProvinceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAR_PROVINCE:
      return {
        ...state,
        dataProvince: state.dataCarType,
      };

    default:
      return state;
  }
};

export default CarProvinceReducer;
