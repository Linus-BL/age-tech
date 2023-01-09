import React from 'react';
import { useState } from 'react';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import Heading1 from '../textComponents/Heading1';

export default function Request() {
  const { currentUser } = useAuth();

  const [titel, setTitel] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [place, setPlace] = useState('');
  const [compensation, setCompensation] = useState('');
  const [time, setTime] = useState('');

  const uid = currentUser.uid;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    addDoc(collection(db, 'adRequest'), {
      titel: titel,
      description: description,
      tags: tags,
      imageUrl: imageUrl,
      place: place,
      compensation: compensation,
      time: time,
      creator: uid,
    });

    setTitel('');
    setDescription('');
    setTags('');
    setPlace('');
    setCompensation('');
    setTime('');

    navigate('/dashboard');
  };

  return (
    <>
      <div className="loginPage">
        <Heading1>Create Request</Heading1>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="titel"
              name="titel"
              value={titel}
              placeholder="Titel"
              onChange={(event) => setTitel(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="description"
              name="description"
              value={description}
              placeholder="Tell us about your offer"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="tags"
              name="tags"
              value={tags}
              placeholder="Tags"
              onChange={(event) => setTags(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={imageUrl}
              placeholder="Image Url"
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="place"
              name="place"
              value={place}
              placeholder="Place"
              onChange={(event) => setPlace(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="time"
              name="time"
              value={time}
              placeholder="Time"
              onChange={(event) => setTime(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="compensation"
              name="compensation"
              value={compensation}
              placeholder="Compensation"
              onChange={(event) => setCompensation(event.target.value)}
            />
          </div>

          <input
            //disabled={loading}
            className="button"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
}
