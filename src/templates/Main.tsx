import Link from "next/link";
import type { ReactNode } from "react";

import { AppConfig } from "@/utils/AppConfig";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full h-full text-gray-700 antialiased bg-[url('/images/white_wall_hash.webp')] ">
    {props.meta}
    <div className="mx-auto container">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="flex items-center justify-between w-full">
            <div className="inline-flex gap-4 items-center">
              <img
                className="w-28 h-28 object-cover rounded-full ml-4"
                src="https://dev4vin.github.io/info/images/profile-pic@2x.jpg"
              />
              <div>
                <h1 className="leading-tight text-5xl">{AppConfig.title}</h1>
                <p className="font-medium leading-tight text-base">
                  {AppConfig.description}
                </p>
              </div>
            </div>
            <div className="my-4  mr-4">
              <h2 className="leading-tight text-2xl mb-3">Software Engineer</h2>
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <small className="font-normal leading-normal text-gray-800">
                  0750100906
                </small>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <small className="font-normal leading-normal text-gray-800">
                  vinsonpeter8@gmail.com
                </small>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap gap-4 p-4">
            <li>
              <Link href="/">
                <a className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/pvwasonga/"
                target="_blank"
              >
                <a className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">
                  Linkedin
                </a>
              </Link>
            </li>
            <li>
              <a
                className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out"
                href="https://github.com/dev4vin"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      {props.children}
      <div className="border-t border-gray-300 py-8 text-center flex flex-col text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{" "}
        <span role="img" aria-label="Love">
          ♥♥♥
        </span>{" "}
        Check out my current work{" "}
        <a className="text-xl" href="https://www.swiftride.co.ke">
          {" "}
          SwiftRide{" "}
        </a>
      </div>
    </div>
  </div>
);

export { Main };
