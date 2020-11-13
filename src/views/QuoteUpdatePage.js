import React from 'react'

import QuoteUpdate from '../features/quote/QuoteUpdate'

class QuoteUpdatePage extends React.Component {
  render() {
    const { quoteID } = this.props.match.params
    // console.log('QuoteUpdatePage:render:quoteID', quoteID)

    return (
        <React.Fragment>
          <QuoteUpdate quoteID={quoteID} />
        </React.Fragment>
    )
  }
}

export default QuoteUpdatePage
