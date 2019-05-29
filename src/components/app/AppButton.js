import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  color: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'danger',
    'warning', 'info', 'light', 'dark', 'link'
  ]),
  removeDefaultClasses: PropTypes.bool
};

const defaultProps = {
  type: 'button',
  color: 'default',
  removeDefaultClasses: false
};

const AppButton = (props) => {
  let { className, removeDefaultClasses, color, text, ...attrs } = props;

  const classes = classNames(
    !removeDefaultClasses ? 'btn' : false,
    color ? `btn-${color}` : false,
    className
  );

  return (
    <button {...attrs} className={classes}>{props.children}</button>
  );
}

AppButton.propTypes = propTypes;
AppButton.defaultProps = defaultProps;

export default AppButton;
