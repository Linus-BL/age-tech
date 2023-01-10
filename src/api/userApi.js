import {
  doc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

export async function getUserData(userId) {
  console.log('Get userdata func', userId);

  const collection = 'users';
  const docRef = doc(db, collection, userId);
  console.log('docRef', docRef);

  const docSnap = await getDoc(docRef);
  if (docSnap) {
    console.log('getUserDataFunc', docSnap.data());
    return docSnap.data();
  }
  console.log('User not found');
  return null;
}
