import Link from "next/link";
import Header from "./components/header/header";
import MainPage from "./main/page";
import './page.css'

export default function Home() {
  return (
    <main className="relative bg-main-page-bg main">
      <Header />
      <MainPage />
    </main>
  );
}
