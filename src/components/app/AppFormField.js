import React from 'react';
import AppLabel from '~/components/app/AppLabel';
import AppInput from '~/components/app/AppInput';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  hint: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  show: PropTypes.bool,
  errorIcon: PropTypes.string,
  hintIcon: PropTypes.string,
  bsSize: PropTypes.oneOf(['sm', 'lg'])
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
    labelAttrs,
    hint,
    hintIcon,
    error,
    errorIcon,
    valid,
    invalid,
    ...attrs } = props;

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

  const labelComponent = (
    <AppLabel
      htmlFor={htmlFor}
      valid={valid}
      invalid={invalid}
      required={attrs.required}
      text={label} />
  );

  return (
    <div class="form-group">
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
