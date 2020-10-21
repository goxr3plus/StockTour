import { get as _get, isNaN } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { v4 } from 'uuid'
import { translate } from '../../utils/helper';
import './JumpToPage.scss'

export default class JumpToPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleKey = this.handleKey.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { totalPages: Math.ceil(props.totalDataSize / props.limit), value: '' }
  }

  static getDerivedStateFromProps(props, state) {
    const newTotalPages = Math.ceil(props.totalDataSize / props.limit)
    return {
      totalPages: newTotalPages,
      value: state.value > newTotalPages ? '' : state.value
    }
  }

  handleKey(event) {
    if (event.key === 'Enter' && this.state.value >= 1 && this.state.value <= this.state.totalPages) {
      this.props.onPageChange(this.state.value)
    }
  }

  handleChange(event) {
    // only storing and displaying positive numbers within our range
    let parsed = Math.abs(parseInt(event.target.value))
    parsed = isNaN(parsed) ? '' : parsed
    if (parsed === '' || (parsed >= 1 && parsed <= this.state.totalPages)) {
      this.setState({ value: parsed })
    }
  }

  render() {
    const { placeholder } = this.props
    const inputId = v4()
    return (
      <div className="jumpToPage">
        <label htmlFor={inputId}>
          <strong>{translate('rsJumpToPage', 'Jump To Page')}:</strong>
        </label>
        <span>
          <input
            id={inputId}
            value={this.state.value}
            type="text"
            className="form-control no-spinner"
            placeholder={placeholder}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
        </span>
      </div>
    )
  }
}

JumpToPage.defaultProps = {
  placeholder: '#',
  translations: {}
}

JumpToPage.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  translations: PropTypes.objectOf(PropTypes.string),
  totalDataSize: PropTypes.number.isRequired,
  limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPageChange: PropTypes.func.isRequired
}
