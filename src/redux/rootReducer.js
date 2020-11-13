import { combineReducers } from "redux";
import CarBrandReducer from "./CarBrand/reducer";
import CarModelReducer from "./CarModel/reducer";
import CarProvinceReducer from "./CarProvince/reducer";
import CarQuoteCrossYearReducer from "./CarQuoteCrossYear/reducer";
import CarSubModelReducer from "./CarSubModel/reducer";
import CarTypeReducer from "./CarType/reducer";
import CarYearReducer from "./CarYear/reducer";
import InsuranceReducer from "./Insurance/reducer"
import PublishedInsurerReducer from "./PublishedInsurer/reducer";

const rootReducer = combineReducers({
  carBrand: CarBrandReducer,
  carModel: CarModelReducer,
  carProvince: CarProvinceReducer,
  carQuoteCrossYear: CarQuoteCrossYearReducer,
  carSubModel: CarSubModelReducer,
  carType: CarTypeReducer,
  carYear: CarYearReducer,
  inSurance: InsuranceReducer,
  publishedInsurerReducer: PublishedInsurerReducer,
});

export default rootReducer;
