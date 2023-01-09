import {
  doc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

export async function getSpecificTag(tagType) {
  // creates reference to the collection which to query
  const col = 'tags';
  const ref = collection(db, col);
  let tags = [];

  // create query against collection
  const q = query(ref, where('name', '==', tagType));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    tags.push({ id: doc.id, ad: doc.data() });
  });
  console.log(tags);
  return tags;
}

export async function getAllTags() {
  const col = 'tag';
  const ref = collection(db, col);
  // query all tag docs from db
  const querySnapshot = await getDocs(ref);
  let tags = [];
  // ad tagnames to tag array
  querySnapshot.forEach((doc) => {
    tags.push({ id: doc.id, name: doc.data().name });
  });
  return tags;
}

export async function getUserTags(userId) {
  const col = 'users';
  const docRef = doc(db, col, userId);
  getDoc(docRef)
    .then((doc) => {
      console.log(doc.data());
      return doc.data().tags;
    })
    .catch((error) => {
      console.log(error);
    });
}
