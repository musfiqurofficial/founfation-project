import { BsArrowRight } from "react-icons/bs";
import img from "../../../assets/grants-rings.png";
import { Link } from "react-router-dom";

const AnalyticsHero = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-0">
          <div className="mr-0 lg:mr-14 text-center lg:text-start">
            <h1 className="text-[50px] lg:text-[90px] 2xl:text-[96px] font-[600] leading-none">
              Grants
            </h1>
            <h4 className="text-[18px] lg:text-[28px] leading-snug my-6">
              The Solana Foundation Grants Program provides milestone-based
              funding to support initiatives aimed at decentralizing, growing,
              and securing the Solana network.
            </h4>
            <button>
              <Link
                to="/"
                className="border text-[#fff] hover:border-[#444bcb] hover:bg-[#ffffff45] bg-[#444bcb] hover:text-[#444bcb] px-10 py-4 text-xl font-semibold flex justify-center items-center gap-2 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg"
              >
                <span>Apply now</span> <BsArrowRight />
              </Link>
            </button>
          </div>
          <div className="mt-8 lg:mt-0 flex lg:justify-end justify-center">
            <img src={img} className="w-[80%]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsHero;
