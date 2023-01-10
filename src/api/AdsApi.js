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

export async function get5AdsByTag(tag) {
  // creates reference to the collection which to query
  const col = 'adOffer';
  const adsRef = collection(db, col);
  let ads = [];

  // create query against collection
  const q = query(adsRef, where('tags', 'array-contains-any', [tag]));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    ads.push({ id: doc.id, ad: doc.data() });
  });
  return ads;
}

//get all tag ads function

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
  const docSnap1 = await getDoc(docRef1);

  if (!docSnap1) {
    const docRef2 = doc(db, col2, id);
    const docSnap2 = await getDoc(docRef2);
    console.log(docSnap2.data());
    return docSnap2.data();
  } else {
    console.log(docSnap1.data());
    return docSnap1.data();
  }
}
