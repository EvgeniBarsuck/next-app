import { AuthErrorCodes } from "firebase/auth";

export const ErrorHandler = (errorCode: string) => {
  let response = {
    status: 500,
    message: "Internal server error",
  };
  switch (errorCode) {
    case AuthErrorCodes.INVALID_EMAIL:
    case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS: {
      response = {
        status: 401,
        message: "Wrong email/password",
      };

      break;
    }
  }

  return response;
};
