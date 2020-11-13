import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

class FindOther extends React.Component {
  state = {
    province: null
  }

  render() {
    console.log(this.props.provinceOption)
    return (
      <React.Fragment>
        FindOther
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '50%' }}>
          {(this.props.loading)
            ? <h1>Loading</h1>
            : (
              <React.Fragment>
                <Select
                onChange={(option) => {
                  console.log(option)
                  this.setState({ province: option.value })
                }}
                options={this.props.provinceOption}
              />
              <button
                onClick={() => { this.props.onSelected(this.state.province) }}
              >
                ตกลง
              </button>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    )
  }
}

FindOther.propTypes = {
  loading: PropTypes.bool,
  provinceOption: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onSelected: PropTypes.func,
}

FindOther.defaultProps = {
  loading: true,
  provinceOption: [],
  onSelected: () => { }
}

export default FindOther
