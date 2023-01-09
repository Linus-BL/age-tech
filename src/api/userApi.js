import {doc, collection, query, where, getDocs, getDoc} from "firebase/firestore";
import { db } from '../firebase';


export async function getUserData(userId) {
    const collection = 'users';
    const docRef = doc(db, collection, userId);
    const docSnap = await getDoc(docRef);
    if(docSnap){
        return docSnap.data();
    }
    console.log("User not found");
    return null;
}