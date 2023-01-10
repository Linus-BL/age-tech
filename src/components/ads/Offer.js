import React from 'react';
import { useState } from 'react';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import Heading1 from '../textComponents/Heading1';

export default function Offer() {
  const { currentUser } = useAuth();

  const [titel, setTitel] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [place, setPlace] = useState('');
  const [compensation, setCompensation] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const uid = currentUser.uid;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    addDoc(collection(db, 'adOffer'), {
      titel: titel,
      description: description,
      tags: tags,
      imageUrl: imageUrl,
      place: place,
      compensation: compensation,
      time: time,
      creator: uid,
      date: date,
    });

    setTitel('');
    setDescription('');
    setTags([]);
    setPlace('');
    setCompensation('');
    setTime('');
    setDate('');

    navigate('/home');
  };

  return (
    <>
      <div className="loginPage">
        <Heading1>Skapa erbjudande</Heading1>
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
              placeholder="Beskrivning"
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
              placeholder="Taggar"
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
              placeholder="Bild Url"
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
              placeholder="Plats"
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
              placeholder="Tid"
              onChange={(event) => setTime(event.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
              className="inputField"
              type="text"
              id="date"
              name="date"
              value={date}
              placeholder="Datum"
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
              placeholder="Kompensation"
              onChange={(event) => setCompensation(event.target.value)}
            />
          </div>

          <input
            //disabled={loading}
            className="button"
            type="submit"
            value="Skapa annons"
          />
        </form>
      </div>
    </>
  );
}
