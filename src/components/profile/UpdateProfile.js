import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }

    const promises = [];
    setLoading(true);
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        setError(error.code + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div>
        <h2>Update Profile</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              defaultValue={currentUser.email}
              ref={emailRef}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Leave blank to keep the same"
              ref={passwordRef}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password-confirm"
              placeholder="Leave blank to keep the same"
              ref={passwordConfirmRef}
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
          <Link to="/dashboard">Cancel</Link>{' '}
        </div>
      </div>
    </>
  );
}
