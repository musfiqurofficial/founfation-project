import { Link } from "react-router-dom";

const TourHero = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-5 sm:px-10 py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl bg-gradient rounded-xl shadow-2xl">
        <div className="lex-none lg:flex justify-around items-center gap-10 text-white text-center lg:text-start">
          <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-none">
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
