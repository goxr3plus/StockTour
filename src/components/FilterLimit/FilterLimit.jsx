import React, { Component } from 'react';
import { v4 } from 'uuid';
import { translate } from '../../utils/helper';
import './FilterLimit.scss';

export default class FilterLimit extends Component {
  constructor(props) {
    super(props);
    this.onLimitChange = this.onLimitChange.bind(this);
  }

  onLimitChange(e) {
    const event = {
      target: {
        name: e.target.name,
        value: e.target.value,
      },
    };
    this.props.onLimitChange(event);
  }

  render() {
    const { limit, options, totalElements, filterLimitStyle } = this.props;
    const selectId = v4();

    return (
      <div className="filter-limit" style={filterLimitStyle}>
        <label htmlFor={selectId}> {translate('rsShow', 'Show')} </label>{' '}
        <select id={selectId} name="limit" className="" value={limit} onChange={this.onLimitChange}>
          {options.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>{' '}
        {translate('rsOf', 'of')} <b className="total-elements">{totalElements}</b>
      </div>
    );
  }
}
