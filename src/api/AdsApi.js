import {
  collection,
  query,
  where,
  getDocs,
  limit,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

export async function getUserAds(creatorId) {
  // creates reference to the collection which to query
  const col = 'adOffer';
  const adsRef = collection(db, col);
  let ads = [];

  // create query against collection
  const q = query(adsRef, where('creator', '==', creatorId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    ads.push({ id: doc.id, ad: doc.data() });
  });
  return ads;
}

export async function get5OffersByTag(tag) {
  // creates reference to the collection which to query
  const col = 'adOffer';
  const adsRef = collection(db, col);
  let ads = [];

  // create query against collection
  const q = query(adsRef, where('tags', 'array-contains-any', [tag]), limit(5));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    ads.push({ id: doc.id, ad: doc.data() });
  });
  return ads;
}

export async function get5RequestsByTag(tag) {
  // creates reference to the collection which to query
  const col = 'adRequest';
  const adsRef = collection(db, col);
  let ads = [];

  // create query against collection
  const q = query(adsRef, where('tags', 'array-contains-any', [tag]), limit(5));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    ads.push({ id: doc.id, ad: doc.data() });
  });
  return ads;
}
//get all tag ads function
export async function getAllAdsByTag(tag) {
  const col1 = 'adOffer';
  const col2 = 'adRequest';
  let adsRef = collection(db, col1);
  let ads = [];

  const q1 = query(adsRef, where('tags', 'array-contains-any', [tag]));
  const querySnapshot1 = await getDocs(q1);
  querySnapshot1.forEach((doc) => {
    ads.push({ id: doc.id, ad: doc.data() });
  });

  adsRef = collection(db, col2);
  const q2 = query(adsRef, where('tags', 'array-contains-any', [tag]));
  const querySnapshot2 = await getDocs(q2);

  querySnapshot2.forEach((doc) => {
    if (!ads.some((ad) => ad.id === doc.id)) {
      ads.push({ id: doc.id, ad: doc.data() });
    }
  });
  return ads;
}

export async function getAllAds() {
  const col1 = 'adOffer';
  const col2 = 'adRequest';
  let ads = [];
  const querySnapshot1 = await getDocs(collection(db, col1));
  querySnapshot1.forEach((doc) => {
    ads.push({ id: doc.id, ad: doc.data() });
  });

  const querySnapshot2 = await getDocs(collection(db, col2));
  querySnapshot2.forEach((doc) => {
    ads.push({ id: doc.id, ad: doc.data() });
  });
  return ads;
}

export async function getAdById(id) {
  const col1 = 'adOffer';
  const col2 = 'adRequest';
  const docRef1 = doc(db, col1, id);
  const docRef2 = doc(db, col2, id);

  const docSnap1 = await getDoc(docRef1);
  const docSnap2 = await getDoc(docRef2);

  // if docSnap1 empty (offers) -> get from docsnap 2 (requests)
  if (!docSnap1.data()) {
    console.log(docSnap2.data());
    return docSnap2.data();
  } else {
    console.log(docSnap1);
    return docSnap1.data();
  }
}

export async function getAdOffers() {
  const col = 'adOffer';
  let ads = [];
  const querySnapshot = await getDocs(collection(db, col));
  querySnapshot.forEach((doc) => {
    ads.push({ id: doc.id, ad: doc.data() });
  });

  return ads;
}

export async function getAdRequests() {
  const col = 'adRequest';
  let ads = [];

  const querySnapshot = await getDocs(collection(db, col));
  querySnapshot.forEach((doc) => {
    ads.push({ id: doc.id, ad: doc.data() });
  });
  return ads;
}
