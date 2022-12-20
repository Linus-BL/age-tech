import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, /*useNavigate*/ } from 'react-router-dom';
import Heading1 from '../textComponents/Heading1';

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  //const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setMessage('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your email');
    } catch (error) {
      setError(error.code + error.message);
      //error.code error.message to get detailed errors
    }
    setLoading(false);
  }

  //Check if it does a email check

  return (
    <>
      <div className="loginPage">
        <Heading1>Password Reset</Heading1>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
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
          <input

            disabled={loading}
            className="button"
            type="submit"
            value="Submit"
          />
        </form>
        <div>
          <div className="links">
            Need an account? <Link to="/signup">Sign up</Link>{' '}
          </div>
          <div className="links">
            Have an account? <Link to="/login">Log ín</Link>{' '}
          </div>
        </div>
      </div>
    </>
  );
}
