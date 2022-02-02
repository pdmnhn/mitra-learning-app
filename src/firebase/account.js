import "./app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

const handleError = (errorCode) => {
  switch (errorCode) {
    case "auth/email-already-in-use": {
      alert("The email address is already in use by another account.");
      break;
    }
    case "auth/user-not-found": {
      alert("Account with that email doesn't exists");
      break;
    }
    case "auth/weak-password": {
      alert("Password should be at least 6 characters.");
      break;
    }
    case "auth/invalid-email": {
      alert("Invalid email");
      break;
    }
    case "auth/wrong-password": {
      alert("The password is invalid.");
      break;
    }
    default: {
      alert(errorCode);
    }
  }
};

export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    handleError(err.code);
    return false;
  }
};

export const signUp = async (email, password, registerNumber, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await setDoc(doc(db, "users", userCredential.user.uid), {
      name,
      registerNumber,
      email,
    });
    return true;
  } catch (err) {
    handleError(err.code);
    return false;
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
    return true;
  } catch (err) {
    handleError(err.code);
    return false;
  }
};

export const signOut = () => {
  firebaseSignOut(auth);
};
