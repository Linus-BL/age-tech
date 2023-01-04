import { async } from "@firebase/util";
import {collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../firebase';

export async function getUserAds(creatorId){
    // creates reference to the collection which to query
    const col = 'adOffer';
    const adsRef = collection(db, col);
    let ads = []

    // create query against collection
    const q = query(adsRef, where("creator", "==", creatorId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
        ads.push({id: doc.id, ad: doc.data()})
    })
    console.log(ads)
    return ads;
}

export async function getAdsByTag(tag){
    // creates reference to the collection which to query
    const col = 'adOffer';
    const adsRef = collection(db, col);
    let ads = []

    // create query against collection
    const q = query(adsRef, where("tags", "==", tag));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
        ads.push({id: doc.id, ad: doc.data()})
    })
    console.log(ads)
    return ads;


}