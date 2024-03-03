import Image from "next/image";
import "./details.css";

export default function Details() {
  return (
    <div className="bg-white w-full flex flex-row justify-center text-black py-16">
      <div className="max-w-screen-xl">
        <div className="flex flex-row ">
          <Image src="/img/details-1.PNG" width={420} height={480} alt="" />
          <div className="pl-6">
            <h3 className="text-indigo-700 font-bold font-sans text-3xl mb-2">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="italic mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="details-items mb-4">
              <li>
                <i className="bx bx-check"></i>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </li>
              <li>
                <i className="bx bx-check"></i>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
              </li>
              <li>
                <i className="bx bx-check"></i>
                <p>
                  Iure at voluptas aspernatur dignissimos doloribus repudiandae.
                </p>
              </li>
              <li>
                <i className="bx bx-check"></i>
                <p>
                  Iure at voluptas aspernatur dignissimos doloribus repudiandae.
                </p>
              </li>
              <li>
                <i className="bx bx-check"></i>
                <p>
                  Est ipsa assumenda id facilis nesciunt placeat sed doloribus
                  praesentium.
                </p>
              </li>
            </ul>
            <p className="text-gray-700">
              Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita
              omnis eum consequatur non. Sed in asperiores aut repellendus.
              Error quisquam ab maiores. Quibusdam sit in officia
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-24">
          <div className="mt-12 pr-6">
            <h3 className="text-indigo-700 font-bold font-sans text-3xl mb-2">
              Corporis temporibus maiores provident
            </h3>
            <p className="italic mb-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="pb-4 text-gray-600">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
            <p className="text-gray-600">
              Inventore id enim dolor dicta qui et magni molestiae. Mollitia
              optio officia illum ut cupiditate eos autem. Soluta dolorum
              repellendus repellat amet autem rerum illum in. Quibusdam
              occaecati est nisi esse. Saepe aut dignissimos distinctio id enim.
            </p>
          </div>
          <Image src="/img/details-2.PNG" width={420} height={480} alt="" />
        </div>
        <div className="flex flex-row mt-24">
          <Image src="/img/details-3.PNG" width={420} height={480} alt="" />
          <div className="pl-6 pt-12">
            <h3 className="text-indigo-700 font-bold font-sans text-3xl mb-2">
              Sunt consequatur ad ut est nulla consectetur reiciendis animi
              voluptas
            </h3>
            <p className="mb-4">
              Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
              quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas
              dolor doloremque.
            </p>
            <ul className="details-items mb-4">
              <li>
                <i className="bx bx-check"></i>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </li>
              <li>
                <i className="bx bx-check"></i>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
              </li>
              <li>
                <i className="bx bx-check"></i>
                <p>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</p>
              </li>
            </ul>
            <p className="pb-4 text-gray-700">
              Qui consequatur temporibus. Enim et corporis sit sunt harum
              praesentium suscipit ut voluptatem. Et nihil magni debitis
              consequatur est.
            </p>
            <p className="text-gray-700">
              Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit
              excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-24">
          <div className="pl-6 pt-12">
            <h3 className="text-indigo-700 font-bold font-sans text-3xl mb-2">
              Quas et necessitatibus eaque impedit ipsum animi consequatur
              incidunt in
            </h3>
            <p className="italic mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="pb-4 text-gray-700">
              Qui consequatur temporibus. Enim et corporis sit sunt harum
              praesentium suscipit ut voluptatem. Et nihil magni debitis
              consequatur est.
            </p>
            <ul className="details-items mb-4">
              <li>
                <i className="bx bx-check"></i>
                <p className="text-gray-700">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
              <li>
                <i className="bx bx-check"></i>
                <p className="text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
              </li>
              <li>
                <i className="bx bx-check"></i>
                <p className="text-gray-700">
                  Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.
                </p>
              </li>
            </ul>
          </div>
          <Image src="/img/details-4.PNG" width={420} height={480} alt="" />
        </div>
      </div>
    </div>
  );
}
