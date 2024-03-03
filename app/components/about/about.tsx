import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <div id="about" className="bg-white text-black pt-10 flex flex-row">
      <Image src="/next-app/img/about.png" alt="" width={850} height={540} />
      <div className="flex flex-col p-12">
        <div>
          <h3 className="text-3xl text-indigo-900 font-bold mb-4">
            Enim quis est voluptatibus aliquid consequatur fugiat
          </h3>
          <p className="text-gray-600 mb-4">
            Esse voluptas cumque vel exercitationem. Reiciendis est hic
            accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
            voluptate sed facere corporis dolores excepturi. Libero laboriosam
            sint et id nulla tenetur. Suscipit aut voluptate.
          </p>
        </div>
        <ul>
          <li>
            <div className="flex flex-row justify-start mt-10 items-center">
              <div className="rounded-50 w-16 h-16 border-2 border-solid border-green-600">
                <i className="fingerprint flex justify-center items-center h-full bx bx-fingerprint text-3xl"></i>
              </div>
              <div className="ml-6 min-w-7xl">
                <p className="mb-2 font-bold">Lorem Ipsum</p>
                <p className="text-wrap">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-row justify-start mt-10 items-center">
              <div className="rounded-50 w-16 h-16 border-2 border-solid border-green-600">
                <i className="fingerprint flex justify-center items-center h-full bx bx-gift text-3xl"></i>
              </div>
              <div className="ml-6 min-w-7xl">
                <p className="mb-2 font-bold">Nemo Enim</p>
                <p className="text-wrap">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-row justify-start mt-10 items-center">
              <div className="rounded-50 w-16 h-16 border-2 border-solid border-green-600">
                <i className="fingerprint flex justify-center items-center h-full bx bx-atom text-3xl"></i>
              </div>
              <div className="ml-6 min-w-7xl">
                <p className="mb-2 font-bold">Dine Pad</p>
                <p className="text-wrap">
                  Explicabo est voluptatum asperiores consequatur magnam. Et
                  veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
