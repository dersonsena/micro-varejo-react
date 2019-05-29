import React from 'react';

const LoginLayout = (props) => (
  <div className="authentication-wrapper authentication-2 ui-bg-cover ui-bg-overlay-container px-4" style={{ backgroundImage: "url('/images/1.jpg')" }}>
    <div className="ui-bg-overlay bg-dark opacity-25"></div>

    <div className="authentication-inner py-5">
      { props.children }
    </div>
  </div>
);

export default LoginLayout;
