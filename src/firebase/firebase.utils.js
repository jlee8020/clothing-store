import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXNLNepnL1L7W45MDXIinN8I1Vaz-RFQM",
    authDomain: "clothing-db-a7edd.firebaseapp.com",
    databaseURL: "https://clothing-db-a7edd.firebaseio.com",
    projectId: "clothing-db-a7edd",
    storageBucket: "clothing-db-a7edd.appspot.com",
    messagingSenderId: "1021773338300",
    appId: "1:1021773338300:web:0f61a7b8f845358013a2b9",
    measurementId: "G-2J46P7KFPX"
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
        })
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