import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, /*useNavigate*/ } from 'react-router-dom';

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
      <div>
        <h2>Password Reset</h2>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
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
          <div>
            Need an account? <Link to="/signup">Sign up</Link>{' '}
          </div>
          <div>
            Have an account? <Link to="/login">Log ín</Link>{' '}
          </div>
        </div>
      </div>
    </>
  );
}
