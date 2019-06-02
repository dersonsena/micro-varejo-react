import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onClickNext: PropTypes.func,
  onClickPrevious: PropTypes.func,
  onClickPage: PropTypes.func,
  className: PropTypes.string,
  removeDefaultClasses: PropTypes.bool,
};

const defaultProps = {
  size: '',
  currentPage: 1,
  removeDefaultClasses: false
};

const AppPagination = (props) => {
  console.log(props);

  const {
    className,
    size,
    currentPage,
    pageCount,
    onClickNext,
    onClickPrevious,
    onClickPage,
    removeDefaultClasses
  } = props;

  if (pageCount <= 1) {
    return null;
  }

  const pageNumbers = (() => {
    let pages = [];

    for (let i = 1; i <= props.pageCount; i++) {
      const classes = classnames(
        'page-item',
        currentPage === i ? 'active' : false
      );

      pages.push(
        <li key={i} className={classes}>
          <a className="page-link" onClick={onClickPage}>{ i }</a>
        </li>
      );
    }

    return pages;
  })();

  const ulClasses = classnames(
    !removeDefaultClasses ? 'pagination' : false,
    size ? `pagination-${size}` : false,
    className
  );

  const previousClasses = classnames(
    'page-item',
    currentPage <= 1 ? 'disabled' : false
  );

  const nextClasses = classnames(
    'page-item',
    currentPage >= pageCount ? 'disabled' : false
  );

  return (
    <ul className={ulClasses}>
      <li className={previousClasses}>
        <a className="page-link" onClick={onClickPrevious}>«</a>
      </li>
      { pageNumbers }
      <li className={nextClasses}>
        <a className="page-link" onClick={onClickNext}>»</a>
      </li>
    </ul>
  );
};

AppPagination.propTypes = propTypes;
AppPagination.defaultProps = defaultProps;

export default AppPagination;
