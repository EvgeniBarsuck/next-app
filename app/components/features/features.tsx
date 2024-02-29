import "./features.css";

export default function Features() {
  return (
    <section className="bg-white w-full flex flex-row justify-center">
      <div className="w-full py-16 max-w-7xl">
        <h2 className="text-gray-500 text-sm title">FEATURES</h2>
        <p className="text-4xl text-indigo-800 font-bold font-sans pb-10">
          Check The Features
        </p>
        <ul className="text-indigo-800 flex flex-row justify-between flex-wrap features-items">
          <li className="p-5 flex flex-row items-center w-1/4">
            <i className="ri-store-line text-3xl color text-yellow-400 w-10 font-bold"></i>
            <p className=" font-bold">Lorem Ipsum</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-bar-chart-box-line text-3xl color text-indigo-700 w-10 font-bold"></i>
            <p className=" font-bold">Dolor Sitema</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-calendar-todo-line text-3xl color text-red-500 w-10 font-bold"></i>
            <p className=" font-bold">Sed perspiciatis</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-paint-brush-line text-3xl color text-pink-400 w-10 font-bold"></i>
            <p className=" font-bold">Magni Dolores</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-database-2-line text-3xl color text-blue-400 w-10 font-bold"></i>
            <p className=" font-bold">Nemo Enim</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-gradienter-line text-3xl color text-yellow-400 w-10 font-bold"></i>
            <p className=" font-bold">Eiusmod Tempor</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-file-list-3-line text-3xl color text-teal-400 w-10 font-bold"></i>
            <p className=" font-bold">Midela Teren</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-price-tag-2-line text-3xl color text-violet-500 w-10 font-bold"></i>
            <p className=" font-bold">Pira Neve</p>
          </li>
          <li className="p-5 flex flex-row  items-center">
            <i className="ri-anchor-line text-3xl color text-amber-700 w-10 font-bold"></i>
            <p className=" font-bold">Dirada Pack</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-disc-line text-3xl color text-rose-700 w-10 font-bold"></i>
            <p className=" font-bold">Moton Ideal</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-base-station-line text-3xl color text-red-400 w-10 font-bold"></i>
            <p className=" font-bold">Verdo Park</p>
          </li>
          <li className="p-5 flex flex-row items-center">
            <i className="ri-fingerprint-line text-3xl color text-green-400 w-10 font-bold"></i>
            <p className=" font-bold">Flavor Nivelanda</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
