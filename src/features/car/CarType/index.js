import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React from 'react'
import PropTypes from 'prop-types'

import { setCarType, setShowTabs } from '../../../redux/InSurace/actions'

class CarType extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        CarType
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          {this.props.carType.map((carType) => (
            <button
              key={'car-type-btn' + carType.cartypeid}
              style={{ padding: '20px' }}
              onClick={() => {
                this.props.setCarType(carType.cartypeid)
                this.props.setShowTabs(carType.showTabs)
                this.props.onSelectCarType()
              }}
            >
              {carType.quotetypedisplayname}
            </button>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

CarType.propTypes = {
  onSelectCarType: PropTypes.func,
}

CarType.defaultProps = {
  onSelectCarType: () => {}
}

// TODO: prop-types for redux

const mapStateToProps = state => ({
  carType: state.carType.dataCarType,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setCarType,
  setShowTabs,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CarType)

