import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../../../component/Container";

class FindModel extends React.Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        FindModel
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {this.props.loading ? (
            <h1>Loading</h1>
          ) : (
            this.props.models.map((element, index) => (
              <Container.Content
                className="content-select-model"
                key={index}
                externalId="model"
                id={element.model}
                isActive={
                  this.props.inSurance !== undefined
                    ? element.model === this.props.inSurance.modelname
                    : false
                }
                onClick={() => {
                  this.props.onSelected(element.model);
                  // const { setModelName } = this.props;
                  // setModelName(element.model);
                  // this.props.handleNextPage(2, 3)
                }}
              >
                {element.model}
              </Container.Content>
              // <div key={'quote-model-btn' + model.model} style={{ width: '33.33%', margin: '10px 0px' }}>
              //   <button
              //     style={{ padding: '20px' }}
              //     onClick={() => {
              //       // TODO: handle this
              //       this.props.onSelected(model.model)
              //     }}
              //   >
              //     {/* TODO: implement this */}
              //     {model.model}
              //   </button>
              // </div>
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

FindModel.propTypes = {
  loading: PropTypes.bool,
  models: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      // TODO: implement this
    })
  ),
  onSelected: PropTypes.func,
};

FindModel.defaultProps = {
  loading: true,
  models: [],
  onSelected: () => {},
};

export default FindModel;
