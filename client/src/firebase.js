//code from https://blog.logrocket.com/user-authentication-firebase-react-apps/

import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    setDoc,
    doc,
    updateDoc,
    getDoc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAFYSpB04srnKqQLo-bQygU7m2smGlhkkU",
	authDomain: "todo-list-48434.firebaseapp.com",
	projectId: "todo-list-48434",
	storageBucket: "todo-list-48434.appspot.com",
	messagingSenderId: "509196573424",
	appId: "1:509196573424:web:1ed5a31a96c93ae071c035",
	measurementId: "G-GH6ZPLPJD2"
};
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

//helpful functions
const signInWithGoogle = async (then) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    then(res.user);
    /*const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }*/
  } catch (err) {
    console.error(err);
    //alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password, then) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    then(res.user);
  } catch (err) {
    console.error(err);
    //alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password, then) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, {
      displayName: name
    })
    then();
  } catch (err) {
    console.error(err);
    //alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = async (then) => {
  try {
    await signOut(auth);
    then()
  } catch (err) {
    console.log(err)
  }
};

const saveTasks = async (tasks) => {
  const user = getAuth().currentUser
  const collection = doc(db, 'users/' + user.uid)
  updateDoc(collection, {
    tasks: tasks
  }).catch((error) => {
    setDoc(collection, {tasks: tasks})
  })
};

const getTasks = async () => {
  const user = getAuth().currentUser
  if (user == null) {
    return {} 
  }
  const collection = doc(db, 'users/' + user.uid)
  const received = await getDoc(collection)
  if (received.exists()) {
    return received.data()
  } else {
    return {} 
  }
}

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  saveTasks,
  getTasks,
};