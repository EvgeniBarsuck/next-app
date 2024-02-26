import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";
import "./form.css";
import Link from "next/link";
import { ZodError, z } from "zod";
import { zodMapperAuthForm } from "../signup/settings/zod.config";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function SigninForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const validations: ZodError = (schema.safeParse({ email, password }) as {error: ZodError}).error;

    if (validations) {
      validations.errors.map((error) => {
        const formatError = zodMapperAuthForm(error);

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

    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const body = await response.json();

    if (response.ok) {
      router.push("/profile");
    } else {
      setAuthError(body.message);
    }
  }

  return (
    <div className="relative h-screen w-screen">
      <form onSubmit={handleSubmit} className="form-absolute">
        <div className="flex flex-col">
          <input
            name="email"
            placeholder="Email"
            className="min-w-24 max-w-96 m-4 rounded focus:text-blue-500"
            required
            inputMode="email"
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
          <button type="submit" className="min-w-24 max-w-96 m-4">
            Sign in
          </button>
        </div>
        <div className="flex justify-center">
          <Link href="/auth/signup" className="min-w-24 max-w-96 text-sm text-blue-400">
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
