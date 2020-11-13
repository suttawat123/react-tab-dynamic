import { FETCH_PUBLISHED_INSURANCE } from "./types";

const INITIAL_STATE = {
  dataPublishedInsurer: [
    {
      publishedinsurancecode: "VIB",
      publishedinsurancefullnameen: "บ.วิริยะประกันภัย ",
      publishedinsurancefullnameth: "บ.วิริยะ",
      publishedinsuranceimage:
        "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AABLRU",
      publishedinsuranceorder: 1,
    },
    {
      publishedinsurancecode: "SMK",
      publishedinsurancefullnameen: "บ.สินมั่นคง",
      publishedinsurancefullnameth: "บ.สินมั่นคง",
      publishedinsuranceimage:
        "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AABN7k",
      publishedinsuranceorder: 2,
    },
    {
      publishedinsurancecode: "SAF",
      publishedinsurancefullnameen: "บ.คุ้มภัยโตเกียวมารีน",
      publishedinsurancefullnameth: "บ.คุ้มภัยโตเกียวมารีน",
      publishedinsuranceimage:
        "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAgdk",
      publishedinsuranceorder: 3,
    },
  ],
};

const PublishedInsurerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PUBLISHED_INSURANCE:
      return {
        ...state,
        dataPublishedInsurer: state.dataPublishedInsurer,
      };

    default:
      return state;
  }
};

export default PublishedInsurerReducer;
