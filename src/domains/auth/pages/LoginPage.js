import React from 'react';

const LoginPage = (props) => {
  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <form name="form">
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage
