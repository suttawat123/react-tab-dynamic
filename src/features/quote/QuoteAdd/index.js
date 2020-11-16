import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { withRouter } from "react-router-dom";
import React from "react";

import {
  setCarBrand,
  setCarModel,
  setCarYear,
  setCarProvince,
  // setCarQuoteCrossYear,
  setCarSubModel,
  // setCarType,
  setPublishedInsurer,
  // setHistoryInsurance,
} from "../../../redux/Insurance/actions";
import ManageQuoteTap from "../components/ManageQuoteTap";
import { setHistoryInsurance } from "../../../redux/Insurance/actions"
import { fetchCarBrand } from "../../../redux/CarBrand/actions";
import { fetchCarModel } from "../../../redux/CarModel/actions";
import { fetchCarProvince } from "../../../redux/CarProvince/actions";
import { fetchCarQuoteCrossYear } from "../../../redux/CarQuoteCrossYear/actions";
import { fetchCarSubModel } from "../../../redux/CarSubModel/actions";
import { fetchCarType } from "../../../redux/CarType/actions";
import { fetchCarYear } from "../../../redux/CarYear/actions";

const defaultTabs = [
  {
    name: "ยี่ห้อ",
    id: 1,
  },
  {
    name: "รุ่น",
    id: 2,
  },
  {
    name: "ปีรุ่น",
    id: 3,
  },
  {
    name: "รุ่นย่อย",
    id: 4,
  },
  {
    name: "ข้อมูลเพิ่มเติม",
    id: 5,
  },
];

class QuoteAdd extends React.Component {
  state = {
    currentTabID: null,
    data: [],
    loading: false,
    inSurance: this.props.inSurance,
  };

  componentDidMount() {
    const { cartypeid, showTabs } = this.props.inSurance;

    if (!cartypeid || showTabs.length === 0) {
      this.props.history.replace("/car/type?callback-url=/quote/add/");
      return;
    }

    this.fecthDataForTab(showTabs[0]);
  }

  fecthDataForTab = (tabID) => {
    this.setState(
      {
        loading: true,
        data: [],
      },
      () => {
        const {
          carBrand,
          carModel,
          carYear,
          carSubModel,
          carProvince,
        } = this.props;

        switch (tabID) {
          case 1:
            this.setState({
              data: carBrand,
              loading: false,
              // inSurance: inSurance,
            });
            break;
          case 2:
            this.setState({
              data: carModel,
              loading: false,
              // inSurance: inSurance,
            });
            break;
          case 3:
            this.setState({
              data: carYear,
              loading: false,
              // inSurance: inSurance,
            });
            break;
          case 4:
            this.setState({
              data: carSubModel,
              loading: false,
              // inSurance: inSurance,
            });
            break;
          case 5:
            this.setState({
              data: carProvince.map((val) => ({
                value: val.provincekey,
                label: val.provincenameth,
              })),
              loading: false,
            });
            break;
          default:
            this.setState({ loading: false });
            console.warn("[setData] not found tabID:", tabID);
        }
      }
    );
  };

  setData = (tabID, payload) => {
    const {
      setCarBrand,
      setCarModel,
      setCarYear,
      setCarSubModel,
      setCarProvince,
      fetchCarBrand,
      fetchCarModel,
      fetchCarProvince,
      fetchCarQuoteCrossYear,
      fetchCarSubModel,
      fetchCarType,
      fetchCarYear,
    } = this.props;

    switch (tabID) {
      case 1:
        // fetchCarBrand(payload);
        setCarBrand(payload);
        break;
      case 2:
        setCarModel(payload);
        break;
      case 3:
        setCarYear(payload);
        break;
      case 4:
        setCarSubModel(payload);
        break;
      case 5:
        setCarProvince(payload);
        break;
      default:
        console.warn("[setData] not found tabID:", tabID);
    }
  };

  saveFinalSubmit = () => {
    const { historyInsurance, setHistoryInsurance } = this.props
    setHistoryInsurance()
    alert('Success!! See in console')
    console.table(
      historyInsurance.map((val) => ({ ...val, showTabs: val.showTabs.join(',')  })),
    )
  }

  render() {
    const { loading, data } = this.state;
    return (
      <React.Fragment>
        QuoteAdd
        <ManageQuoteTap
          onSubmit={this.setData}
          onChangeTab={this.fecthDataForTab}
          onFinalSubmit={this.saveFinalSubmit}
          defaultTabs={defaultTabs}
          data={data}
          loading={loading}
          showTabs={this.props.inSurance.showTabs}
          inSurance={this.props.inSurance}
        />
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   FindInSurace: state.FindInSurace,
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   setAgentActive: setAgentActive,
//   setFilter: setFilter,
// }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(QuoteFindInsurance)

// TODO: refactoring
const mapStateToProps = (state) => ({
  carType: state.carType.dataCarType,
  inSurance: state.inSurance.FindInsurance,
  historyInsurance: state.inSurance.HistoryInsurance,
  carBrand: state.carBrand.dataCarBrand,
  carModel: state.carModel.dataCarModel,
  carYear: state.carYear.dataCarYear,
  carSubModel: state.carSubModel.dataCarSubModel,
  carProvince: state.carProvince.dataProvince,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCarBrand,
      setCarModel,
      setCarYear,
      setCarSubModel,
      setCarProvince,
      fetchCarBrand,
      fetchCarModel,
      fetchCarProvince,
      fetchCarQuoteCrossYear,
      fetchCarSubModel,
      fetchCarType,
      fetchCarYear,
      setHistoryInsurance,
    },
    dispatch
  );

// TODO: prop-types

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(QuoteAdd);
