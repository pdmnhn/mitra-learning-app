import ".";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { createDoc } from "./database";

const auth = getAuth();

const handleError = (errorCode: string) => {
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
    case "auth/missing-email": {
      alert("Missing email");
      break;
    }
    case "auth/internal-error": {
      alert("Missing details");
      break;
    }
    default: {
      alert(errorCode);
    }
  }
};

export const signIn = async (email: string, password: string) => {
  if (!(email && password)) {
    return alert("Missing details");
  }
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof FirebaseError) {
      handleError(err.code);
    }
  }
};

export const signUp = async (
  email: string,
  password: string,
  registerNumber: string,
  name: string
) => {
  if (!(email && password && registerNumber)) {
    return alert("Missing details");
  } else if (registerNumber.length < 10 || registerNumber.length > 11) {
    return alert("Register number must be 10 or 11 digits");
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    createDoc("users", userCredential.user.uid, {
      name,
      registerNumber,
      email,
    });
  } catch (err) {
    if (err instanceof FirebaseError) {
      handleError(err.code);
    }
  }
};

export const resetPassword = async (email: string) => {
  if (!email) {
    return alert("Missing email");
  }
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    if (err instanceof FirebaseError) {
      handleError(err.code);
    }
  }
};

export const signOut = () => {
  firebaseSignOut(auth);
};
