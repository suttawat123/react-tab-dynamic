import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../../../component/Container";
import { Text } from "../../../../component/Text";

class FindBrand extends React.Component {
  
  render() {
    console.log(this.props.inSurance)
    return (
      <React.Fragment>
        FindBrand
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {this.props.loading ? (
            <h1>Loading</h1>
          ) : (
            this.props.brands.map((element, index) => (
              <Container.Content
                className="content-select-brand"
                key={index}
                externalId="brand"
                id={index}
                // isActive={element.carbrandid === this.props.inSurance.carbrandid}
                onClick={() => {
                  this.props.onSelected(element.carbrandname);
                }}
                externalFooter={<Text.H5>{element.carbrandname}</Text.H5>}
              >
                {/*eslint-disable-next-line*/}
                <img
                  src={element.url === "" ? "https://cr.lnwfile.com/0glheu.jpg" : element.url}
                  style={{ width: 150, height: 150 }}
                />
              </Container.Content>

              // <div
              //   key={"quote-brand-btn" + brand.carbrandid}
              //   style={{ width: "33.33%", margin: "10px 0px" }}
              // >
              //   <button
              //     style={{ padding: "20px" }}
              //     onClick={() => {
              //       this.props.onSelected(brand.carbrandname);
              //     }}
              //   >
              //     {brand.carbrandid}
              //   </button>
              // </div>
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

FindBrand.propTypes = {
  loading: PropTypes.bool,
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  onSelected: PropTypes.func,
};

FindBrand.defaultProps = {
  loading: true,
  brands: [],
  onSelected: () => {},
};

export default FindBrand;
