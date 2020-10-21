import _ from 'lodash';
import React, { Component } from 'react';
// import { DropdownButton, MenuItem } from 'react-bootstrap'
import { AdvancedPagination, Table } from '../index';

export default class AdvancedTable extends Component {
  constructor(props) {
    super(props);

    this.createAction = this.createAction.bind(this);
    this.onViewClick = this.onViewClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onExpandChange = this.onExpandChange.bind(this);
  }

  // -------------------------------- UTILITIES --------------------------------
  createActions = (row) => {
    const { meta } = this.props;

    //Create the primary key
    const primaryKey = _.map(
      //Get Primary Keys
      meta.tableColumns().filter((column) => column.isKey),
      (primaryKey) => {
        return row[primaryKey.id];
      },
    ).join('/');

    // get grid actions
    let gridActions = typeof meta.GridActions === 'function' ? meta.GridActions(this) : [];

    // extend with necessary properties
    gridActions = gridActions.map((action, index) => {
      return this.createAction({ ...action, key: primaryKey, idx: index, row });
    });

    return (<a>Hello</a>
      // <DropdownButton
      //   style={{ borderColor: 'transparent', backgroundColor: 'unset' }}
      //   title={<i className={'fas fa-lg fa-ellipsis-h'} />}
      //   noCaret
      //   id="dropdown"
      // >
      //   {gridActions}
      // </DropdownButton>
    );
  };

  createAction({ title, icon, key, onClick, mode, idx, row, perms }) {
    return (
      //  <Authorized key={idx} perms={perms}>
      // <MenuItem key={idx} eventKey={key} onClick={onClick.bind(null, { key, mode, row })}>
      //   <i className={`fas fa-fw ${icon} fa-lg`} />
      //   {translate(title)}
      // </MenuItem>
      <b>Hello</b>
      //  </Authorized>
    );
  }

  // --------------------------------- ACTION HANDLERS ---------------------------
  onLimitChange = (event) => {
    this.props.getResultsClientSide({ paginationLimit: event.target.value });
  };

  onPageChange = (page) => {
    this.props.getResultsClientSide({ paginationPage: page });
  };

  onSortChange = (newSort) => {
    this.props.getResultsClientSide(newSort);
  };

  onViewClick({ key, mode }) {
    const currentPath = History.location.pathname;
    History.push(`${currentPath}/${key}/view`);
  }

  onEditClick({ key, mode }) {
    const currentPath = History.location.pathname;
    History.push(`${currentPath}/${key}/edit`);
  }

  onDeleteClick({ key }) {
    this.props.deleteCurrent(key);
  }

  onExpandChange({ expandRow }) {
    this.props.expandCollapse(expandRow);
  }

  // --------------------------------- RENDER --------------------------------
  render() {
    const {
      /* DataTable */
      meta,
      table,
      tableFooter,
      translations,
      renderHeader,
      renderColumn,
      showActions,

      /* Expandable */
      renderExpandedRow,
      expandable,
      renderRowActions,

      /* Sorting */
      showSort,
      sortOrder,
      sortColumn,
      onSortChange,

      /* Pagination */
      showPagination,
      paginationPage,
      paginationLimit,
      paginationCol,
      onPageChange,

      /* Pagination Styling */
      globalAdvancedPaginatorStyle,
      paginationStyle,
      jumpToPageStyle,
      filterLimitStyle,

      /* Pagination Classes */
      paginationClass,
      jumpToPageClass,
      filterLimitClass,

      /* Limit Filter */
      onLimitChange,
      limitOptions,
    } = this.props;

    return (
      <div className="dataTables_wrapper form-inline dt-bootstrap no-footer">
        <Table
          /* Data */
          data={table.data}
          /* Columns */
          columns={meta.tableColumns().filter((item) => item.hideColumn == false || item.hideColumn == undefined)}
          renderHeader={renderHeader}
          renderColumn={renderColumn}
          showActions={showActions}
          /* Expand */
          expandable={expandable}
          renderExpandedRow={renderExpandedRow}
          expandedRows={table.expandedRows}
          onExpandChange={this.onExpandChange}
          /* Sorting */
          showSort={showSort}
          sortOrder={sortOrder}
          sortColumn={sortColumn}
          onSortChange={_.isFunction(onSortChange) ? onSortChange : this.onPageChange}
          /* Actions */
          renderRowActions={renderRowActions ? renderRowActions : this.createActions}
          hideTableActions={meta.hideTableActions}
          /* Etc */
          translations={translations}
          tableFooter={tableFooter}
        />
        {showPagination ? (
          <AdvancedPagination
            translations={translations}
            page={paginationPage}
            limit={paginationLimit}
            totalDataSize={table.totalDataSize}
            paginationCol={paginationCol}
            onPageChange={_.isFunction(onPageChange) ? onPageChange : this.onPageChange}
            onLimitChange={_.isFunction(onLimitChange) ? onLimitChange : this.onLimitChange}
            limitOptions={limitOptions}
            /* Pagination Styling */
            globalAdvancedPaginatorStyle={globalAdvancedPaginatorStyle}
            paginationStyle={paginationStyle}
            jumpToPageStyle={jumpToPageStyle}
            filterLimitStyle={filterLimitStyle}
            /* Pagination Classes */
            paginationClass={paginationClass}
            jumpToPageClass={jumpToPageClass}
            filterLimitClass={filterLimitClass}
          ></AdvancedPagination>
        ) : null}
      </div>
    );
  }
}

AdvancedTable.defaultProps = {
  table: {
    data: [],
    totalDataSize: 0,
  },
  translations: {},
  meta: {},
};
