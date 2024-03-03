import About from "../components/about/about";
import Features from "../components/features/features";
import Counts from "../components/counts/counts";
import Details from "../components/details/details";
import Overview from "../components/overview/overview";

import "./main.css";
import Gallery from "../components/gallery/gallery";

export default function MainPage() {
  return (
    <div>
      <Overview />
      <div className="z-10 relative">
        <About />
        <Features />
        <Counts />
        <Details />
        <Gallery />
      </div>
    </div>
  );
}
