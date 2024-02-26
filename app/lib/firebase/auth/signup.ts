import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { firebaseApp } from "../firebase.app";
import { ErrorBase } from "../base/error.base";
import { ErrorHandler } from "../error/error-handler";

const auth = getAuth(firebaseApp);

export async function signUp(email: string, passwrd: string) {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, passwrd);

    return response;
  } catch (e: any) {
    throw new ErrorBase(ErrorHandler(e));
  }
}
