import Image from "next/image";
import { getPath } from "@/deploy/config/add-base-path";

import "./overview.css";

export default function Overview() {
  return (
    <div className="z-10 relative">
      <section className="w-full flex flex-row justify-center">
        <div className="flex flex-row justify-between min-w-1280">
          <div className="flex flex-row justify-center items-center max-w-2xl">
            <div>
              <p className="text-5xl text-wrap mb-5">
                Build Your Landing Page With <u>Bootstlander</u>
              </p>
              <p className="text-2xl text-wrap mb-10">
                We are team of talented designers making websites with Bootstrap
              </p>
              <button className="bg-green-500 border-radius-50 w-40 h-9">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <Image
              className="overview-animation w-400 h-500"
              src={getPath("/img/overview.png").fullPath}
              alt="Not found"
              width={1}
              height={1}
            />
          </div>
        </div>
      </section>
      <section>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use
              xlinkHref="#wave-path"
              x="50"
              y="3"
              fill="rgba(255,255,255, .1)"
            />
          </g>
          <g className="wave2">
            <use
              xlinkHref="#wave-path"
              x="50"
              y="0"
              fill="rgba(255,255,255, .2)"
            />
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </section>
    </div>
  );
}
