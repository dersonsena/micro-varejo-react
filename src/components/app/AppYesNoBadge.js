import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AppBadge from './AppBadge';

const propTypes = {
  type: PropTypes.oneOf(['default', 'pill', 'outline']),
  value: PropTypes.any.isRequired,
  yesText: PropTypes.string,
  noText: PropTypes.string,
  positiveClass: PropTypes.string,
  negativeClass: PropTypes.string,
  positiveIcon: PropTypes.string,
  negativeIcon: PropTypes.string
};

const defaultProps = {
  type: 'default',
  yesText: 'Sim',
  noText: 'Não',
  positiveClass: 'success',
  negativeClass: 'danger',
  positiveIcon: 'fas fa-check',
  negativeIcon: 'fas fa-ban'
};

const AppYesNoBadge = (props) => {
  const {
    type,
    value,
    yesText,
    noText,
    positiveClass,
    negativeClass,
    positiveIcon,
    negativeIcon
  } = props;

  const isPositive = (value === 1 || value === true);
  const badgeColorClass = (isPositive ? positiveClass : negativeClass);
  const icon = (isPositive ? positiveIcon : negativeIcon);
  const text = (isPositive ? yesText : noText);

  return (
    <AppBadge icon={icon} color={badgeColorClass} text={text} />
  )
};

AppYesNoBadge.propTypes = propTypes;
AppYesNoBadge.defaultProps = defaultProps;

export default AppYesNoBadge;
