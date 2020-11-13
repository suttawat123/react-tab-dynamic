import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React from "react";
import PropTypes from "prop-types";
import { setCarType, setShowTabs } from "../../../redux/Insurance/actions";
import { Container } from "../../../component/Container";
import { Text } from "../../../component/Text";

class CarType extends React.Component {
  render() {
    const urlImage = "https://cr.lnwfile.com/0glheu.jpg";
    return (
      <React.Fragment>
        <Text.H5 className="sub-header">เลือกประเภทรถ</Text.H5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {this.props.carType.map((car, index) => (
            <Container.Content
              className="container-select-car"
              key={index}
              id={car.cartypeid}
              externalId="car-type"
              onClick={() => {
                this.props.setCarType(car.cartypeid);
                this.props.setShowTabs(car.showTabs);
                this.props.onSelectCarType();
              }}
              externalFooter={<Text.H5>{car.quotetypedisplayname}</Text.H5>}
            >
              <React.Fragment>
                <img alt="" src={urlImage} width={"100%"} height={"100%"} />
              </React.Fragment>
            </Container.Content>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

CarType.propTypes = {
  onSelectCarType: PropTypes.func,
};

CarType.defaultProps = {
  onSelectCarType: () => {},
};

const mapStateToProps = (state) => ({
  carType: state.carType.dataCarType,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCarType,
      setShowTabs,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CarType);
