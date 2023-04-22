import { Link } from "react-router-dom";

const TourHero = () => {
  return (
    <div className="sm:mt-20 mb-10 mx-5">
      <div className="px-4 py-5 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg 2xl:lg:max-w-screen-xl md:px-24 lg:px-10 bg-gradient rounded-xl shadow-2xl">
        <div className="flex-none sm:flex justify-around items-center text-white">
          <h1 className="text-[56px] font-semibold leading-none">
          Tour de Sun '22
          </h1>
          <div className="text-lg flex flex-col gap-2 mt-8 sm:mt-0">
            <Link
              to="/faq"
              className="border border-white px-3 py-2 rounded-md font-medium hover:bg-white hover:text-black"
              rel="noopener noreferrer"
            >
              FAQ
            </Link>
            <a
              href="FAQ"
              target="_blank"
              className="border border-white px-3 py-2 rounded-md font-medium hover:bg-white hover:text-black"
              rel="noopener noreferrer"
            >
              Apply now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourHero;
