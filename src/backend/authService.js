import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "./firebase";

// this is for new user registration
export async function registerUser(email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  return cred.user; // has uid, email, etc.
}

// this should login an exisitng user
export async function loginUser(email, password) {
  const cred = await signInWithEmailAndPassword(auth, password);
  return cred.user;
}

// this is just logout
export async function logoutUser() {
  await signOut(auth);
}
