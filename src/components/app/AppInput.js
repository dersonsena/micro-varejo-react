import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  bsSize: PropTypes.oneOf(['sm', 'lg'])
};

const defaultProps = {
  type: 'text',
  bsSize: '',
  valid: false,
  invalid: false,
};

const AppInput = (props) => {
  let { className, valid, invalid, bsSize, ...attrs } = props;

  attrs.id = (attrs.hasOwnProperty('id') ? attrs.id : attrs.name);
  attrs.autoComplete = (attrs.hasOwnProperty('autoComplete') ? attrs.autoComplete : 'off');

  const classes = classNames(
    'form-control',
    className,
    bsSize ? `form-control-${bsSize}` : false,
    valid ? `is-valid` : false,
    invalid ? `is-invalid` : false,
  );

  return (
    <input type={attrs.type} className={classes} { ...attrs } />
  );
}

AppInput.propTypes = propTypes;
AppInput.defaultProps = defaultProps;

export default AppInput;
