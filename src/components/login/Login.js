import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Heading1 from '../textComponents/Heading1';
import BodyText from '../textComponents/BodyText';
import Header from '../home/Header';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard');
    } catch (error) {
      //console.log(JSON.stringify(error))
      setError(error.code + error.message);
      if (error.code === 'auth/wrong-password') {
        setError('Wrong password.');
      }
      if (error.code === 'auth/user-not-found') {
        {
          setError('This email adress is not registered.');
        }
      }
      //error.code error.message to get detailed errors
    }
    setLoading(false);
  }

  //Check if it does a email check

  return (
    <div className="loginPage">
      <Heading1>Log In</Heading1>
      {error && <p>{error}</p>}
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <input
            className="inputField"
            type="email"
            name="email"
            placeholder="Email"
            ref={emailRef}
          />
        </div>
        <div className="formGroup">
          <input
            className="inputField"
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        <input
          disabled={loading}
          className="button"
          type="submit"
          value="Submit"
        />
      </form>

      <div className="signUp">
        <BodyText>
          {' '}
          Need an account? <Link to="/signup">Sign up</Link>
        </BodyText>
      </div>
      <div className="forgotPassword">
        <BodyText>
          {' '}
          <Link to="/forgotPassword">Forgot password</Link>
        </BodyText>
      </div>
    </div>
  );
}
