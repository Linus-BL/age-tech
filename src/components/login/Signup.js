import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

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
      <div>
        <h2>Sign Up</h2>
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
          <div className="form-group">
            <input
              type="password"
              name="password-confirm"
              placeholder="Confirm passoword"
              ref={passwordConfirmRef}
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
        <div>
          Need an account? <Link to="/login">Log ín</Link>{' '}
        </div>
      </div>
    </>
  );
}
