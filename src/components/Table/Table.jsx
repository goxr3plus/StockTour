import _ from 'lodash';
import React, { Component } from 'react';
import { translate } from '../../utils/helper';
import { ExpandableRow } from '../index';
import './Table.scss';

export default class Table extends Component {
  // --------------------------------- ACTION HANDLERS --------------------------------

  onExpandChange = (e) => {
    this.props.onExpandChange({ expandRow: { [e.target.name]: e.target.value } });
  };

  showSort = (column) => {
    return this.props.showSort && !!column.hideSort === false;
  };

  onSortClick = (columnName) => {
    const { onSortChange, sortOrder } = this.props;
    onSortChange({ sort: sortOrder === 'asc' || sortOrder == null ? 'desc' : 'asc', column: columnName });
  };

  // --------------------------------- UTILITIES --------------------------------

  sortClass = (columnName) => {
    const { sortOrder, sortColumn } = this.props;

    if (columnName === sortColumn) {
      let ascOrDesc = sortOrder === 'asc' ? 'fas fa-fw fa-sort-up' : 'fas fa-fw fa-sort-down';
      return sortOrder === 'asc' || sortOrder === 'desc' ? ascOrDesc : 'fas fa-fw fa-sort';
    } else {
      return 'fas fa-fw fa-sort';
    }
  };

  // --------------------------------- RENDER --------------------------------

  render = () => {
    let {
      data,
      columns,
      renderHeader,
      renderColumn,
      expandable,
      expandedRows,
      renderExpandedRow,
      showActions,
      renderRowActions,
      tableFooter,
    } = this.props;

    // ------- HEADERS -----------
    let tableHeaderArray = columns.map((column) => {
      const showShort = this.showSort(column);

      let component;
      if (renderHeader && column.isCustomHeader) {
        component = renderHeader(column);
      } else {
        component = (
          <>
            {translate(column.translation, column.name)}
            {showShort && (
              <span
                style={{ cursor: 'pointer' }}
                className={this.sortClass(`${column.id}`)}
                onClick={this.onSortClick.bind(null, `${column.id}`)}
              />
            )}
          </>
        );
      }

      return (
        <th key={column.id} hidden={column.hidden}
            style={{ maxWidth: `${column.tableHeaderWidth}`, ...column.tableHeaderStyle }}>
          {component}
        </th>
      );
    });
    if (expandable) tableHeaderArray.push(<th key={'expandable-empty-header-td'}></th>);

    // ------- ROWS -----------
    let rowActions = null;
    let td_action = null;

    let rows = data.map((record, index) => {
      // Action column
      if (showActions) {
        rowActions = renderRowActions ? renderRowActions(record, this) : rowActions;

        td_action = <td className="text-center actions-td">{rowActions}</td>;
      }

      // generate table columns
      let tdArray = columns.map((column, index) => {
        let component;
        if (renderColumn && column.isCustomColumn) {
          component = renderColumn(record, column, this, index);
        } else {
          const val = column.path ? _.get(record, column.path) : record[column.id];
          component = val != null && typeof val !== 'object' ? val : '';
        }

        return (
          <td style={{ ...column.tableColumnStyle }} key={column.id} hidden={column.hidden}>
            {component}
          </td>
        );
      });

      let rowsArray = [];
      const rowContent = (
        <>
          {tdArray}
          {td_action}
        </>
      );

      const row = expandable ? (
        <ExpandableRow onExpandChange={this.onExpandChange} open={expandedRows[index]} index={index} key={index}
                       id={index}>
          {rowContent}
        </ExpandableRow>
      ) : (
        <tr key={index}>{rowContent}</tr>
      );

      rowsArray.push(row);

      // expandable table row renderer
      let colsToSpan = tdArray.length + (showActions ? 1 : 0) + (expandable ? 1 : 0);
      if (expandable && expandedRows[index] === true) {
        const renderedExpandedRecord = renderExpandedRow(record, index, this);

        if (renderedExpandedRecord != null) {
          rowsArray.push(
            <tr className="expanded-row" key={`expanded-${index}`}>
              <td colSpan={colsToSpan} className="expanded">
                {renderedExpandedRecord}
              </td>
            </tr>,
          );
        }
      }

      return rowsArray;
    });

    // generate column actions
    let th_action = showActions && (
      <th className="text-center" style={{ width: '10%' }}>
        {translate('rsActions', 'Actions')}
      </th>
    );

    return (
      <table className="table data-table">
        <thead>
        <tr>
          {tableHeaderArray}
          {showActions && th_action}
        </tr>
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>{tableFooter}</tfoot>
      </table>
    );
  };
}

Table.defaultProps = {
  data: [],
  actions: [],
  columns: [],
  translations: {},
  expandable: false,
  expandedRows: {},
  showActions: false,
  showSort: false,
  sortOrder: 'asc',
  renderColumn: null,
  onSortChange: () => {
  },
  onExpandChange: () => {
  },
  renderExpandedRow: () => null,
  renderRowActions: null,
};
