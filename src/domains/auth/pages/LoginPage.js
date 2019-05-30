import React from 'react';
import AppFormField from '~/components/app/AppFormField';
import AppCheckbox from '~/components/app/AppCheckbox';
import AppLabel from '~/components/app/AppLabel';
import FormComponent from '~/utils/FormComponent';
import AppButton from '~/components/app/AppButton';
import AuthService from '~/domains/auth/AuthService';
import lang from '~/lang';

class LoginPage extends FormComponent {
  constructor(props) {
    super(props);

    this.service = AuthService.build();

    this.state = {
      loader: false,
      errors: {},
      fields: { email: '', password: '', remember: '1' }
    }
  }

  login = (e) => {
    this.setState({ loader: true });

    this.service
      .login(this.state.fields.email, this.state.fields.password)
      .then(response => {
        console.log(response);
      })
      .catch(errorInfo => {
        this.setState({ errors: JSON.parse(errorInfo.response.data) });
      })
      .finally(() => {
        this.setState({ loader: false })
      })

    e.preventDefault()
  }

  render() {
    return (
      <div className="card">
        <div className="p-4 p-sm-5">
          <div className="d-flex justify-content-center align-items-center pb-2 mb-4">
            <div className="ui-w-60">
              <div className="w-100 position-relative" style={{ paddingBottom: '54%' }}>
                <svg className="w-100 h-100 position-absolute" viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stopOpacity=".25" offset="0"></stop><stop stopOpacity=".1" offset=".3"></stop><stop stopOpacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33"></linearGradient></defs><path className="fill-primary" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
              </div>
            </div>
          </div>

          <h5 className="text-center text-muted font-weight-normal mb-4">
            { lang('views.auth.title') }
          </h5>

          <form noValidate>
            <AppFormField
              type='email'
              name='email'
              disabled={this.state.loader}
              value={this.state.fields.email}
              onChange={this.handleChange}
              label={lang('views.auth.email.label')}
              placeholder={lang('views.auth.email.placeholder')} />

            <AppFormField
              type='password'
              name='password'
              disabled={this.state.loader}
              value={this.state.fields.password}
              onChange={this.handleChange}
              label={[
                <div key={0}>{lang('views.auth.password.label')}</div>,
                <a key={1} href='#' tabIndex='-1' className="d-block small">{lang('views.auth.forgotPassword')}</a>
              ]}
              labelClass='d-flex justify-content-between align-items-end'
              placeholder={lang('views.auth.password.placeholder')} />

            { this.state.errors.hasOwnProperty('code') &&
              <p className='text-danger'>
                <i className='fas fa-info-circle'></i> {this.state.errors.message}
              </p>
            }

            <div className="d-flex justify-content-between align-items-center m-0">
              <AppLabel className='custom-control custom-checkbox m-0' htmlFor='remember' removeDefaultClasses={true}>
                <AppCheckbox
                  className="custom-control-input"
                  name='remember'
                  disabled={this.state.loader}
                  checked={this.state.fields.remember === '1'}
                  value={this.state.fields.remember}
                  onChange={this.handleChange} />

                  <span className="custom-control-label">
                    { lang('views.auth.remember') }
                  </span>
              </AppLabel>

              <AppButton color='primary' type='submit' disabled={this.state.loader} onClick={this.login}>
                {!this.state.loader ? lang('views.auth.btnLogin') : lang('views.auth.btnLoginLoading')}{' '}
                <i className="fas fa-sign-in-alt" />
              </AppButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
