import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import { FilterLimit, JumpToPage } from '../index';
import './AdvancedPagination.scss';
import { translate } from '../../utils/helper';

const AdvancedPagination = ({
                              // paginationCol,
                              page,
                              translations,
                              totalDataSize,
                              limit,
                              onPageChange,
                              onLimitChange,
                              pageRangeDisplayed,
                              marginPagesDisplayed,
                              previousLabel,
                              nextLabel,
                              breakLabel,
                              limitOptions,
                              containerClassName,
                              previousLinkClassName,
                              nextLinkClassName,
                              disabledClassName,
                              activeClassName,
                              showFilterLimit,
                              showPageJumpTo,

                              /* Styling */
                              globalAdvancedPaginatorStyle,
                              paginationStyle,
                              jumpToPageStyle,
                              filterLimitStyle,

                              /* Classes */
                              paginationClass,
                              jumpToPageClass,
                              filterLimitClass,
                            }) => {
  const filterCol = showPageJumpTo ? 3 : 6;
  const jumpToCol = showFilterLimit ? 3 : 6;
  const paginationCol = showPageJumpTo && showFilterLimit && filterCol == 3 && jumpToCol == 3 ? 6 : 6;
  const totalPages = Math.ceil(totalDataSize / limit);
  const forcePage = page < totalPages ? page : page == totalPages ? page - 1 : page > totalPages ? totalPages - 1 : 0;

  return (
    <Row className="advanced-pagination" style={globalAdvancedPaginatorStyle}>
      {/* Filter Limit */}
      {showFilterLimit ? (
        <Col md={filterCol}>
          <Row>
            <Col md={12}>
              <FilterLimit
                translations={translations}
                options={limitOptions}
                onLimitChange={(limit) => onLimitChange(limit.target.value)}
                totalElements={totalDataSize}
                limit={limit}
                className={`filterLimit ${filterLimitClass || ''}`}
                filterLimitStyle={filterLimitStyle}
              />
            </Col>
          </Row>
        </Col>
      ) : null}

      {/* Pagination */}
      <Col
        md={paginationCol}
        className={`pagination ${paginationClass || ''}`}
        style={{ textAlign: `${!showPageJumpTo ? 'right' : 'right'}`, ...paginationStyle }}
      >
        <ReactPaginate
          previousLabel={translate('rsPrevious', previousLabel)}
          nextLabel={translate('rsNext', nextLabel)}
          breakLabel={breakLabel}
          pageRangeDisplayed={pageRangeDisplayed}
          marginPagesDisplayed={marginPagesDisplayed}
          forcePage={forcePage}
          /* Page Count always begins at 0 internally
           * So 1st page will always return {page.selected = 0 }
           */
          pageCount={totalPages}
          onPageChange={(page) => onPageChange(page.selected)}
          containerClassName={containerClassName}
          previousLinkClassName={previousLinkClassName}
          nextLinkClassName={nextLinkClassName}
          disabledClassName={disabledClassName}
          activeClassName={activeClassName}
        />
      </Col>

      {/* Jump To Page */}
      {showPageJumpTo ? (
        <Col md={jumpToCol} className={`${jumpToPageClass || ''}`} style={jumpToPageStyle}>
          <JumpToPage translations={translations} limit={limit} totalDataSize={totalDataSize}
                      onPageChange={(page) => onPageChange(page - 1)} />
        </Col>
      ) : null}
    </Row>
  );
};

AdvancedPagination.defaultProps = {
  jumpToStyle: {},
  withWrapperClass: true,
  limit: 10,
  paginationCol: 6,
  previousLabel: 'Previous',
  nextLabel: 'Next',
  breakLabel: <span className="gap">...</span>,
  pageRangeDisplayed: 3,
  marginPagesDisplayed: 2,
  limitOptions: [10, 20, 30, 40],
  containerClassName: 'pagination',
  previousLinkClassName: 'previous_page',
  nextLinkClassName: 'next_page',
  disabledClassName: 'disabled',
  activeClassName: 'active',
  showPageJumpTo: true,
  showFilterLimit: true,
};

AdvancedPagination.propTypes = {
  paginationStyle: PropTypes.object,
  jumpToStyle: PropTypes.object,
  withWrapperClass: PropTypes.bool,
  paginationCol: PropTypes.number,
  page: PropTypes.number.isRequired,
  translations: PropTypes.objectOf(PropTypes.string),
  totalDataSize: PropTypes.number.isRequired,
  limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPageChange: PropTypes.func.isRequired,
  onLimitChange: PropTypes.func.isRequired,
};

export default AdvancedPagination;
