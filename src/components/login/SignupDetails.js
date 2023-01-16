import React from 'react';
import { useState } from 'react';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import Heading1 from '../textComponents/Heading1';

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

    navigate('/selectTags');
  };

  return (
    <>
      <div className="loginPage">
        <Heading1>Berätta mer om dig</Heading1>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="Förnamn"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Efternamn"
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="bio"
              name="bio"
              value={bio}
              placeholder="Bio"
              onChange={(event) => setBio(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="city"
              name="city"
              value={city}
              placeholder="Stad"
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="number"
              id="age"
              name="age"
              value={age}
              placeholder="Ålder"
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="gender"
              name="gender"
              value={gender}
              placeholder="Kön"
              onChange={(event) => setGender(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="profilePicture"
              name="profilePicture"
              value={profilePicture}
              placeholder="Url till profilbild"
              onChange={(event) => setProfilePicture(event.target.value)}
            />
          </div>

          <input
            //disabled={loading}
            className="button"
            type="submit"
            value="Spara"
          />
        </form>
      </div>
    </>
  );
}
