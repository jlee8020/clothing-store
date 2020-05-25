import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('FFU8GRdbhxzbJJTDqbea').collection('cartItems').doc('9pnLZzeC1NJHO16xM6rW')

firestore.doc('/users/FFU8GRdbhxzbJJTDqbea/cartItems/9pnLZzeC1NJHO16xM6rW');

firestore.collection('/users/FFU8GRdbhxzbJJTDqbea/cartItems')