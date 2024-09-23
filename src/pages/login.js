import React from 'react';
import { skapi } from '../skapi';

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form
        action="/welcome"
        onSubmit={(e) => skapi.login(e.nativeEvent).catch(err => 
          alert(err.message)
        )}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;

