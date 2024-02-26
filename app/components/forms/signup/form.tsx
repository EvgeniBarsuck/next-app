import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ZodError, z } from "zod";
import Link from "next/link";

import { zodMapperAuthForm } from "./settings/zod.config";
import "./form.css";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    setEmailError(null);
    setPasswordError(null);
    setIsLoading(true);
    setAuthError(null);

    const validations: ZodError = (schema.safeParse({ email, password }) as {error: ZodError}).error;

    if (validations) {
      validations.errors.map((error) => {
        const formatError = zodMapperAuthForm(error);
        console.log("🚀 ~ errors.errors.map ~ formatError:", formatError);

        if (formatError.field === "email") {
          setEmailError(formatError.message);
        }

        if (formatError.field === "password") {
          setPasswordError(formatError.message);
        }
      });

      setIsLoading(false);

      return;
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const body = await response.json();
    if (response.ok) {
      router.push("/auth/signin");
    } else {
      setAuthError(body.message);
    }
    setIsLoading(false);
  }

  return (
    <div className="relative h-screen w-screen">
      <form onSubmit={handleSubmit} className="form-absolute">
        <div className="flex flex-col">
          <input
            name="email"
            placeholder="Email"
            required
            inputMode="email"
            className="min-w-24 max-w-96 m-4 rounded focus:text-blue-500"
          />
          {emailError ? (
            <p className="text-sm text-red-500">{emailError}</p>
          ) : null}
          <input
            name="password"
            placeholder="Password"
            className="min-w-24 max-w-96 m-4 rounded"
            required
            type="password"
            inputMode="text"
          />
          {passwordError ? (
            <p className="text-sm text-red-500">{passwordError}</p>
          ) : null}
          {authError ? <p className="text-red-400 pl-7 ">{authError}</p> : null}
        </div>
        <div className="flex justify-center">
          <button className="min-w-24 max-w-96 text-sm">Sign up</button>
        </div>
        <div className="flex justify-center">
          <Link href="/auth/signin" className="text-blue-400 p-2">Already have account? Sing in</Link>
        </div>
      </form>
    </div>
  );
}
