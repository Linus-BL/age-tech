import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Heading1 from '../textComponents/Heading1';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/signupdetails'); //Ändra routing till formulärsida
    } catch (error) {
      setError(error.code + error.message);
      //Den validerar lösenordslängd, måste vara mer än 6 tecken
      //error.code error.message to get detailed errors
    }
    setLoading(false);
  }

  //Check if it does a email check

  return (
    <>
      <div className="loginPage">
        <Heading1>Sign Up</Heading1>
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
          <div className="formGroup">
            <input
              className="inputField"
              type="password"
              name="password-confirm"
              placeholder="Confirm passoword"
              ref={passwordConfirmRef}
              required
            />
          </div>
          <input
            className="button"
            disabled={loading}
            type="submit"
            value="Submit"
          />
        </form>
        <div className="links">
          Need an account? <Link to="/">Log ín</Link>{' '}
        </div>
      </div>
    </>
  );
}
