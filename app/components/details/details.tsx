import Image from "next/image";
import './details.css';

export default function Details() {
  return (
    <div className="bg-white w-full flex flex-row justify-center text-black">
      <div className="max-w-screen-xl">
        <div className="flex flex-row ">
          <Image src="/img/details-1.png" width={420} height={480} alt="" />
          <div>
            <h3 className="text-indigo-700 font-semibold font-sans text-3xl mb-2">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="italic mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
              <i className="bi bi-check icon"></i>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </li>
              <li>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
              </li>
              <li>
                <p>
                  Iure at voluptas aspernatur dignissimos doloribus repudiandae.
                </p>
              </li>
              <li>
                <p>
                  Iure at voluptas aspernatur dignissimos doloribus repudiandae.
                </p>
              </li>
              <li>
                <p>
                  Est ipsa assumenda id facilis nesciunt placeat sed doloribus
                  praesentium.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
