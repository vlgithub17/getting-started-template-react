import React from 'react';
import { skapi } from '../skapi';

const Signup = () => {
  return (
    <div>
      <h2>Signup Page</h2>
      <form 
        action="/login"
        onSubmit={(e) => {
            skapi.signup(e.nativeEvent).catch((err) => {
            alert(err.message);
            });
        }}
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
        <input
        type="text"
        name="name"
        placeholder="Enter your name"
        required
      />
      <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Signup;

