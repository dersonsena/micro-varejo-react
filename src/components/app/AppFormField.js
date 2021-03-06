import React from 'react';
import AppLabel from '~/components/app/AppLabel';
import AppInput from '~/components/app/AppInput';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
  hint: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  show: PropTypes.bool,
  errorIcon: PropTypes.string,
  hintIcon: PropTypes.string,
  bsSize: PropTypes.oneOf(['', 'sm', 'lg']),
  labelClass: PropTypes.string
};

const defaultProps = {
  type: 'text',
  bsSize: '',
  valid: false,
  invalid: false,
  required: false,
  show: true,
  errorIcon: 'fas fa-info-circle',
  hintIcon: 'fas fa-exclamation-circle',
};

const AppFormField = (props) => {
  let {
    className,
    label,
    hint,
    hintIcon,
    error,
    errorIcon,
    valid,
    invalid,
    show,
    labelClass,
    ...attrs } = props;

  if (!show) {
    return;
  }

  const hintText = (hint ? (
    <small id={`${attrs.name}-hint`} className="form-text text-muted">
      <i className={hintIcon}></i> { hint }
    </small>
  ) : '');

  const errorText = (error ? (
    <div className="invalid-feedback">
      <i className={errorIcon}></i> { error }
    </div>
  ) : '');

  const htmlFor = (attrs.hasOwnProperty('id') ? attrs.hasOwnProperty('id') : attrs.name);

  const labelComponent = label && (
    <AppLabel
      className={labelClass}
      htmlFor={htmlFor}
      valid={valid}
      invalid={invalid}
      required={attrs.required}
      text={label} />
  );

  return (
    <div className="form-group">
      { label ? labelComponent : '' }
      <AppInput valid={valid} invalid={invalid} { ...attrs }  />
      { hintText }
      { errorText }
    </div>
  );
};

AppFormField.propTypes = propTypes;
AppFormField.defaultProps = defaultProps;

export default AppFormField;
