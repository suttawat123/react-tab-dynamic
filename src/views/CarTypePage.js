import React from 'react'
import qs from 'query-string'

import CarType from '../features/car/CarType'

class CarTypePage extends React.Component {
  componentDidMount() {
    console.log(this.getCallbackUrl())
    if (this.getCallbackUrl() == null) {
      alert('callbackURL is not define')
      return
    }
  }

  getCallbackUrl = () => {
    return qs.parse(this.props.location.search)['callback-url']
  }

  render() {
    return (
      <React.Fragment>
        <CarType
          onSelectCarType={() => {
            this.props.history.replace(this.getCallbackUrl())
          }}
        />
      </React.Fragment>
    )
  }
}

export default CarTypePage
