import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  type: PropTypes.oneOf(['default', 'pill', 'outline']),
  color: PropTypes.oneOf([
    'default', 'primary', 'secondary', 'success',
    'warning', 'info', 'danger', 'dark'
  ]),
  text: PropTypes.string.isRequired,
  icon: PropTypes.string
};

const defaultProps = {
  type: 'default',
  color: 'default'
};

const AppBadge = ({ type, text, icon, color }) => {
  const classes = classnames(
    'badge',
    type === 'default' ? `badge-${color}`: false,
    type === 'pill' ? `badge-pill badge-${color}`: false,
    type === 'outline' ? `badge-outline-${color}`: false
  );

  const iconTag = (icon ? <i className={icon} /> : '');

  return (
    <span style={{fontSize: '12px'}} className={classes}>
      {iconTag} {text}
    </span>
  );
};

AppBadge.propTypes = propTypes;
AppBadge.defaultProps = defaultProps;

export default AppBadge;
