import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../../../component/Container";

class FindYears extends React.Component {
  render() {
    return (
      <React.Fragment>
        FindYears
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            width: "40%",
          }}
        >
          {this.props.loading ? (
            <h1>Loading</h1>
          ) : (
            this.props.years.map((element, index) => (
              <Container.Content
                className="content-select-year"
                key={index}
                externalId="year"
                id={element.year}
                isActive={
                  this.props.inSurance !== undefined
                    ? element.year === this.props.inSurance.caryear
                    : false
                }
                onClick={() => {
                  this.props.onSelected(element.year);
                }}
              >
                {element.year + 543}(ค.ศ. {element.year})
              </Container.Content>
              // <button
              //   key={"year-btn-" + year.year}
              //   style={{ padding: '1px 20px' }}
              //   onClick={() => {
              //     // TODO: handle this
              //     this.props.onSelected(year.year)
              //   }}
              // >
              //   {/* TODO: implement this */}
              //   {year.year}
              // </button>
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

FindYears.propTypes = {
  loading: PropTypes.bool,
  years: PropTypes.arrayOf(PropTypes.any),
  onSelected: PropTypes.func,
};

FindYears.defaultProps = {
  loading: true,
  years: [],
  onSelected: () => {},
};

export default FindYears;
