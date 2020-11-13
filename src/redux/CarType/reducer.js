import { FETCH_CAR_TYPE } from "./types";

const INITIAL_STATE = {
  dataCarType: [
    {
      cartype: 1,
      cartypeid: "MQCT0000008",
      cartypename_en: "Sedan",
      cartypename_th: "เก๋ง",
      cartyperoryor: "1",
      isgenonline: true,
      permissionname: "USRCONTROL",
      propcode: "110",
      propid: "MQCP0000004",
      propname: "รถยนต์ส่วนบุคคล",
      quotetype: "S",
      quotetypedisplayname: "เก๋ง, กระบะ 4 ประตู",
      quotetypesort: 1,
      showTabs: [2, 3, 4],
    },
    {
      cartype: 2,
      cartypeid: "MQCT0000005",
      cartypename_en: "Pick-up",
      cartypename_th: "กระบะ",
      cartyperoryor: "3",
      isgenonline: true,
      permissionname: "USRCONTROL",
      propcode: "320",
      propid: "MQCP0000003",
      propname: "เพื่อการพาณิชย์",
      quotetype: "P",
      quotetypedisplayname: "กระบะ 2 ประตู",
      quotetypesort: 2,
      showTabs: [1, 2, 3, 4, 5],
    },
    {
      cartype: 8,
      cartypeid: "MQCT0000003",
      cartypename_en: "van",
      cartypename_th: "ตู้",
      cartyperoryor: "2",
      isgenonline: true,
      permissionname: "USRCONTROL",
      propcode: "210",
      propid: "MQCP0000005",
      propname: "รถยนต์ส่วนบุคคล",
      quotetype: "V",
      quotetypedisplayname: "รถตู้",
      quotetypesort: 3,
      showTabs: [5, 3, 1, 4],
    },
  ],
};

const CarTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAR_TYPE:
      return {
        ...state,
        dataCarType: state.dataCarType,
      };

    default:
      return state;
  }
};

export default CarTypeReducer;
