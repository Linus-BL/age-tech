import React from 'react';
import { useState } from 'react';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SignupDetails() {
  const { currentUser } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [bio, setBio] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const email = currentUser.email;
  const uid = currentUser.uid;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setDoc(doc(db, 'users', uid), {
      name: firstName,
      surname: lastName,
      email: email,
      profilePicture: profilePicture,
      bio: bio,
      points: 0,
      city: city,
      age: age,
      gender: gender,
    });

    setFirstName('');
    setLastName('');
    setProfilePicture('');
    setBio('');
    setCity('');
    setAge('');
    setGender('');

    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="bio"
          name="bio"
          value={bio}
          placeholder="Bio"
          onChange={(event) => setBio(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          placeholder="City"
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          placeholder="Age"
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="gender"
          name="gender"
          value={gender}
          placeholder="Gender"
          onChange={(event) => setGender(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="profilePicture"
          name="profilePicture"
          value={profilePicture}
          placeholder="Profile picture url"
          onChange={(event) => setProfilePicture(event.target.value)}
        />
      </div>

      <input
        //disabled={loading}
        className="form-btn"
        type="submit"
        value="Submit"
      />
    </form>
  );
}
