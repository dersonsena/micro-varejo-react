import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  removeDefaultClasses: PropTypes.bool
};

const defaultProps = {
  valid: false,
  invalid: false,
  removeDefaultClasses: false
};

const AppCheckbox = (props) => {
  let { className, valid, invalid, removeDefaultClasses, ...attrs } = props;

  attrs.id = (attrs.hasOwnProperty('id') ? attrs.id : attrs.name);

  const classes = classNames(
    removeDefaultClasses ? 'form-check-input' : false,
    className,
    valid ? `is-valid` : false,
    invalid ? `is-invalid` : false,
  );

  return (
    <input type='checkbox' className={classes} { ...attrs } />
  );
}

AppCheckbox.propTypes = propTypes;
AppCheckbox.defaultProps = defaultProps;

export default AppCheckbox;
