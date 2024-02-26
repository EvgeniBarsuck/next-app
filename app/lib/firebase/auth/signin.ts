import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";

import { firebaseApp } from "../firebase.app";
import { ErrorHandler } from "../error/error-handler";
import { ErrorBase } from "../base/error.base";

const auth = getAuth(firebaseApp);

export async function signIn(email: string, passwrd: string) {
  try {
    const response = await signInWithEmailAndPassword(auth, email, passwrd);

    return response;
  } catch (e: any) {
    throw new ErrorBase(ErrorHandler(e.code))
  }
}
