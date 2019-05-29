import React from 'react';
import AppLabel from '~/components/app/AppLabel';
import AppCheckbox from '~/components/app/AppCheckbox';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  show: PropTypes.bool,
  errorIcon: PropTypes.string,
  labelClass: PropTypes.string
};

const defaultProps = {
  valid: false,
  invalid: false,
  required: false,
  show: true,
  errorIcon: 'fas fa-info-circle',
  labelClass: 'form-check-label'
};

const AppFormCheckbox = (props) => {
  let {
    className,
    label,
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

  const errorText = (error ? (
    <div className="invalid-feedback">
      <i className={errorIcon}></i> { error }
    </div>
  ) : '');

  const htmlFor = (attrs.hasOwnProperty('id') ? attrs.hasOwnProperty('id') : attrs.name);

  return (
    <div className="form-group form-check">
      <AppCheckbox
        valid={valid}
        invalid={invalid}
        { ...attrs }  />

      <AppLabel
        className={labelClass}
        htmlFor={htmlFor}
        valid={valid}
        invalid={invalid}
        required={attrs.required}
        removeDefaultClasses={true}
        text={label} />

      { errorText }
    </div>
  );
};

AppFormCheckbox.propTypes = propTypes;
AppFormCheckbox.defaultProps = defaultProps;

export default AppFormCheckbox;
