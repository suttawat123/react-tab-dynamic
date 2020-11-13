import {
  SET_CAR_TYPE,
  SET_CAR_SUB_MODEL,
  SET_CAR_QUOTE_CROSS_YEAR,
  SET_CAR_BRAND,
  SET_CAR_MODEL,
  SET_CAR_PROVINCE,
  SET_CAR_YEAR,
  SET_PUBLISHED_INSURANCE,
  SET_HISTORY_INSURANCE,
} from "./types";

export const setCarBrand = (payload) => {
  return {
    type: SET_CAR_BRAND,
    payload: payload,
  };
};

export const setCarModel = (payload) => {
  return {
    type: SET_CAR_MODEL,
    payload: payload,
  };
};

export const setCarProvince = (payload) => {
  return {
    type: SET_CAR_PROVINCE,
    payload: payload,
  };
};

export const setCarQuoteCrossYear = (payload) => {
  return {
    type: SET_CAR_QUOTE_CROSS_YEAR,
    payload: payload,
  };
};

export const setCarSubModel = (payload) => {
  return {
    type: SET_CAR_SUB_MODEL,
    payload: payload,
  };
};

export const setCarType = (payload) => {
  return {
    type: SET_CAR_TYPE,
    payload: payload,
  };
};

export const setCarYear = (payload) => {
  return {
    type: SET_CAR_YEAR,
    payload: payload,
  };
};

export const setPublishedInsurer = (payload) => {
  return {
    type: SET_PUBLISHED_INSURANCE,
    payload: payload,
  };
};

export const setHistoryInsurance = () => {
  return {
    type: SET_HISTORY_INSURANCE,
  };
};
