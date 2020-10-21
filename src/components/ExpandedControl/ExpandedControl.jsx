import React, { Component } from 'react';

export default class ExpandedControl extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onExpandChange, index, open } = this.props;

    const newEvent = {
      target: {
        name: index,
        value: !open,
      },
    };
    onExpandChange(newEvent);
  }

  render() {
    const { open, disabled } = this.props;

    const className = !open === true ? 'fas fa-fw fa-2x fa-angle-right' : 'fas fa-fw fa-2x fa-angle-up';

    return <span style={{ cursor: 'pointer' }} className={className} onClick={this.handleChange} open={open}
                 disabled={true} />;
  }
}
