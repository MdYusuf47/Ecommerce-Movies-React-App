import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBI60PShS1_czktiibB4soYWsQ51Y0gSc0",
    authDomain: "semester-project-f6357.firebaseapp.com",
    projectId: "semester-project-f6357",
    storageBucket: "semester-project-f6357.appspot.com",
    messagingSenderId: "778109775967",
    appId: "1:778109775967:web:c6f0e69b335aed2eeaabea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;