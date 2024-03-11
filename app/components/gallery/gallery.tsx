"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Gallery() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((response) => response.json())
      .then((responseInJson) => {
        console.log(responseInJson);
        setData(responseInJson.data);
      });
  }, []);

  return (
    <section
      id="features"
      className="bg-white w-full flex flex-row justify-center"
    >
      <div className="max-w-7xl">
        <div className="w-full py-12 ">
          <h2 className="text-gray-500 text-sm title">GALLERY</h2>
          <p className="text-4xl text-indigo-800 font-bold font-sans pb-10">
            CHECK OUR GALLERY 
          </p>
        </div>
        <ul className="flex flex-row flex-wrap mb-16">
          {data
            ? (data as { url: string }[]).map((photo, key) => (
                <li key={key} className="w-1/4 pr-1 pb-1">
                  <Image src={photo.url} height={250} width={320} alt="" />
                </li>
              ))
            : null}
        </ul>
      </div>
    </section>
  );
}
