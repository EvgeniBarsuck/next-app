import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row items-center justify-around p-24">
      <Link href="auth/signin">Sign in</Link>
      <Link href='auth/signup'>Sign up</Link>
    </main>
  );
}
