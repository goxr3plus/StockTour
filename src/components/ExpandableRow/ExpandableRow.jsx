import React from 'react';
import { ExpandedControl } from '../index';

const ExpandableRow = (props) => {
  const { children, id, ...expandControlProps } = props;

  return (
    <tr key={id} className={expandControlProps.open === true ? 'expanded expandable' : ''}>
      <td className="expandableTd" key={id}>
        <ExpandedControl {...expandControlProps} key={id} />
      </td>
      {children}
    </tr>
  );
};

export default ExpandableRow;
