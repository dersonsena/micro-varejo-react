import React from 'react';
import PropTypes from 'prop-types';
import StringMask from 'string-mask';
import classnames from 'classnames';

const AppTableSummary = ({ className, removeDefaultClasses, pageCount, totalCount}) => {
  if (!pageCount || pageCount === 0) {
    return null;
  }

  const divClasses = classnames(
    !removeDefaultClasses ? 'summary' : false,
    className
  );

  return (
    <div className={divClasses}>
      Total de {''}
      <strong>{ StringMask.apply(totalCount, '#.##0', {reverse: true}) } registros</strong> {''}
      encontrados.
    </div>
  );
};

AppTableSummary.propTypes = {
  className: PropTypes.string,
  pageCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  removeDefaultClasses: PropTypes.bool
};

AppTableSummary.defaultProps = {
  removeDefaultClasses: false
};

export default AppTableSummary;
