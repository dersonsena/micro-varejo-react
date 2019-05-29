import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  removeDefaultClasses: PropTypes.bool
};

const defaultProps = {
  valid: false,
  invalid: false,
  required: false,
  removeDefaultClasses: false
};

const AppLabel = (props) => {
  let {
    className,
    text,
    valid,
    invalid,
    required,
    removeDefaultClasses,
    ...attrs
  } = props;

  let classes = classNames(
    !removeDefaultClasses ? 'form-label' : false,
    className,
    valid ? 'text-success' : false,
    invalid ? 'text-danger' : false
  );

  const asterix = (required ? <span className="text-danger">*</span> : '');

  return (
    text ? (
      <label {...attrs} className={classes}>{asterix} {text}</label>
    ) : (
      <label {...attrs} className={classes}>{props.children}</label>
    )
  )
};

AppLabel.propTypes = propTypes;
AppLabel.defaultProps = defaultProps;

export default AppLabel;
