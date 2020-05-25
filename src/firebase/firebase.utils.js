import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBHQ6a1g6zNhftz2Td_CUcG9szZKkN1lkA",
  authDomain: "clothing-db-4084f.firebaseapp.com",
  databaseURL: "https://clothing-db-4084f.firebaseio.com",
  projectId: "clothing-db-4084f",
  storageBucket: "clothing-db-4084f.appspot.com",
  messagingSenderId: "997891433772",
  appId: "1:997891433772:web:ed55646895c0a0017d3889",
  measurementId: "G-56W5YQJGKQ"
  };

  firebase.initializeApp(config); 

  //ensure user isLoggedIn
  //returns userRef
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch(error){
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;