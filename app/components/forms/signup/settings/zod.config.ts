import { z } from "zod";

type Field = "email" | "password" | "unknown";

export const zodMapperAuthForm = (issue: z.ZodIssue) => {
  let error: { field: Field; message: string } = {
    message: "Unknown error",
    field: "unknown",
  };

  switch (issue.path[0]) {
    case "email": {
      error = {
        field: "email",
        message: issue.message,
      };
      break;
    }
    case "password": {
      error = {
        field: "password",
        message: issue.message,
      };
      break;
    }
  }

  return error;
};
