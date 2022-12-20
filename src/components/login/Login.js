import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

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
    <>
      <div>
        <h2>Log In</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
          <input
            disabled={loading}
            className="form-btn"
            type="submit"
            value="Submit"
          />
        </form>
        <div>{/*Glömt lösen*/}</div>
        <div>
          Need an account? <Link to="/signup">Sign up</Link>{' '}
        </div>
        <div>
          <Link to="/forgotPassword">Forgot password</Link>{' '}
        </div>
      </div>
    </>
  );
}
