import React from 'react'
import PropTypes from 'prop-types'

class FindYears extends React.Component {
  render() {
    return (
      <React.Fragment>
        FindYears
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '40%' }}>
          {
            (this.props.loading)
              ? <h1>Loading</h1>
              : this.props.years.map(year => (
                <button
                  key={"year-btn-" + year.year}
                  style={{ padding: '1px 20px' }}
                  onClick={() => {
                    // TODO: handle this
                    this.props.onSelected(year.year)
                  }}
                >
                  {/* TODO: implement this */}
                  {year.year}
                </button>
            ))
          }
        </div>
      </React.Fragment>
    )
  }
}

FindYears.propTypes = {
  loading: PropTypes.bool,
  years: PropTypes.arrayOf(PropTypes.any),
  onSelected: PropTypes.func,
}

FindYears.defaultProps = {
  loading: true,
  years: [],
  onSelected: () => {},
}

export default FindYears
