import {
  SET_CAR_TYPE,
  SET_SHOW_TABS,
  SET_CAR_SUB_MODEL,
  SET_CAR_QUOTE_CROSS_YEAR,
  SET_CAR_BRAND,
  SET_CAR_MODEL,
  SET_CAR_PROVINCE,
  SET_CAR_YEAR,
  SET_PUBLISHED_INSURANCE,
  SET_HISTORY_INSURANCE,
} from "./types";

const INITIAL_STATE = {
  FindInsurance: {
    cartypeid: "", //ประเภทรถ
    showTabs: [],
    carbrandid: "", //รหัส ยี่ห้อ
    brandname: "", //ยี่ห้อ
    modelname: "", //รุ่น
    caryear: 0, //ปีรุ่น
    carmodelid: "", //รุ่นย่อย
    provinceid: 0, //จังหวัด
  },
  HistoryInsurance: [],
};

const CarBrandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CAR_TYPE:
      return {
        ...state,
        FindInsurance: { ...state.FindInsurance, cartypeid: action.payload },
      };

    case SET_SHOW_TABS:
      return {
        ...state,
        FindInsurance: { ...state.FindInsurance, showTabs: action.payload }
      };

    case SET_CAR_BRAND:
      return {
        ...state,
        FindInsurance: { ...state.FindInsurance, carbrandid: action.payload },
      };

    case SET_CAR_MODEL:
      return {
        ...state,
        FindInsurance: { ...state.FindInsurance, modelname: action.payload },
      };

    case SET_CAR_YEAR:
      return {
        ...state,
        FindInsurance: { ...state.FindInsurance, caryear: action.payload },
      };

    case SET_CAR_SUB_MODEL:
      return {
        ...state,
        FindInsurance: { ...state.FindInsurance, carmodelid: action.payload },
      };

    case SET_CAR_QUOTE_CROSS_YEAR:
      return {
        ...state,
        FindInsurance: { ...state.FindInsurance, crossyear: action.payload },
      };

    case SET_CAR_PROVINCE:
      return {
        ...state,
        FindInsurance: { ...state.FindInsurance, provinceid: action.payload },
      };

    case SET_PUBLISHED_INSURANCE:
      return {
        ...state,
        FindInsurance: {
          ...state.FindInsurance,
          publishedinsurancecode: action.payload,
        },
      };

    case SET_HISTORY_INSURANCE:
      return {
        ...state,
        HistoryInsurance: state.HistoryInsurance.push(state.FindInsurance),
      };

    default:
      return state;
  }
};

export default CarBrandReducer;
