import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool
};

const defaultProps = {
  valid: false,
  invalid: false,
  required: false
};

const AppLabel = (props) => {
  let { className, text, valid, invalid, required, ...attrs } = props;

  let classes = classNames(
    className,
    valid ? 'text-success' : false,
    invalid ? 'text-danger' : false
  );

  const asterix = (required ? <span className="text-danger">*</span> : '');

  return (
    <label {...attrs} className={classes}>{ asterix } { text }:</label>
  )
};

AppLabel.propTypes = propTypes;
AppLabel.defaultProps = defaultProps;

export default AppLabel;
