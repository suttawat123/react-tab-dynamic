import React from 'react'
import PropTypes from 'prop-types'

class FindSubModel extends React.Component {
  render() {
    return (
      <React.Fragment>
        FindSubModel
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {(this.props.loading)
            ? <h1>Loading</h1>
            : this.props.subModels.map((subModel) => (
            <div key={'quote-sub-model-btn' + subModel.submodel} style={{ width: '33.33%', margin: '10px 0px' }}>
              <button
                style={{ padding: '20px' }}
                onClick={() => {
                  // TODO: handle this
                  this.props.onSelected(subModel.submodel)
                }}
              >
                {/* TODO: implement this */}
                {subModel.submodel}
              </button>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

FindSubModel.propTypes = {
  loading: PropTypes.bool,
  subModels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      // TODO: implement this
    })
  ),
  onSelected: PropTypes.func,
}

FindSubModel.defaultProps = {
  loading: true,
  subModels: [{ id: 1 }, { id: 2 }],
  onSelected: () => {},
}

export default FindSubModel

