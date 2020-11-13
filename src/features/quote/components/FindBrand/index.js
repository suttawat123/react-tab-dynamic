import React from 'react'
import PropTypes from 'prop-types'

class FindBrand extends React.Component {
  render() {
    return (
      <React.Fragment>
        FindBrand
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            (this.props.loading)
              ? <h1>Loading</h1>
              : this.props.brands.map((brand) => ( // TODO: split
                <div key={'quote-brand-btn' + brand.carbrandid} style={{ width: '33.33%', margin: '10px 0px' }}>
                  <button
                    style={{ padding: '20px' }}
                    onClick={() => {
                      // TODO: handle this
                      this.props.onSelected(brand.carbrandname)
                    }}
                  >
                    {/* TODO: implement this */}
                    {brand.carbrandid}
                  </button>
                </div>)
              )
          }
        </div>
      </React.Fragment>
    )
  }
}

FindBrand.propTypes = {
  loading: PropTypes.bool,
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      // TODO: implement this
    })
  ),
  onSelected: PropTypes.func,
}

FindBrand.defaultProps = {
  loading: true,
  brands: [],
  onSelected: () => {},
}

export default FindBrand
