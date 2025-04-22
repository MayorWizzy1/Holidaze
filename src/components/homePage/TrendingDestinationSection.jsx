import { Link } from 'react-router-dom';

export function TrendingDestinationSection() {
  return (
    <div className="px-4 pb-8 lg:pb-20 lg:px-32">
      <h1 className="text-xl font-bold mb-4">Trending destinations</h1>
      <ul className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-4 md:grid-rows-none lg:gap-3">
        <li className="rounded-[10px] aspect-square relative group overflow-hidden">
          <img
            src="public/norway.jpg"
            alt="destination - norway"
            className="aspect-square absolute top-0 right-0 bottom-0 left-0 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <Link className="flex justify-end items-end p-4 bg-gradient-to-b from-transparent-black to-semi-transparent-black w-full h-full relative z-10 lg:p-6">
            <p className="font-boska font-bold text-2xl text-white lg:text-[32px]">
              Norway
            </p>
          </Link>
        </li>
        <li className="rounded-[10px] aspect-square relative group overflow-hidden">
          <img
            src="public/japan.jpg"
            alt="destination - japan"
            className="aspect-square absolute top-0 right-0 bottom-0 left-0 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <Link className="flex justify-end items-end p-4 bg-gradient-to-b from-transparent-black to-semi-transparent-black w-full h-full relative z-10 lg:p-6">
            <p className="font-boska font-bold text-2xl text-white lg:text-[32px]">
              Japan
            </p>
          </Link>
        </li>
        <li className="rounded-[10px] aspect-square relative group overflow-hidden">
          <img
            src="public/spain.jpg"
            alt="destination - spain"
            className="aspect-square absolute top-0 right-0 bottom-0 left-0 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <Link className="flex justify-end items-end p-4 bg-gradient-to-b from-transparent-black to-semi-transparent-black w-full h-full relative z-10 lg:p-6">
            <p className="font-boska font-bold text-2xl text-white lg:text-[32px]">
              Spain
            </p>
          </Link>
        </li>
        <li className="rounded-[10px] aspect-square relative group overflow-hidden">
          <img
            src="public/thailand.jpg"
            alt="destination - thailand"
            className="aspect-square absolute top-0 right-0 bottom-0 left-0 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <Link className="flex justify-end items-end p-4 bg-gradient-to-b from-transparent-black to-semi-transparent-black w-full h-full relative z-10 lg:p-6">
            <p className="font-boska font-bold text-2xl text-white lg:text-[32px]">
              Thailand
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
