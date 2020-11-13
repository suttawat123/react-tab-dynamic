import React from 'react'
import PropTypes from 'prop-types'

import ManageQuoteTap from '../components/ManageQuoteTap'

class QuoteUpdate extends React.Component {
  render() {
    return (
      <React.Fragment>
        QuoteUpdate - {this.props.quoteID}
        <ManageQuoteTap />
      </React.Fragment>
    )
  }
}

QuoteUpdate.propTypes = {
  quoteID: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
}

export default QuoteUpdate
