import { Link } from "react-router-dom";
import HeroImg from "../../../assets/header-2.webp";
import { BsArrowRight } from "react-icons/bs";

const HeroAria = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-0">
          <div className="mr-0 lg:mr-14 text-center lg:text-start">
            <h1 className="text-[50px] lg:text-[90px] 2xl:text-[96px] font-[600] leading-none">
              The Solana Foundation
            </h1>
            <h4 className="text-[18px] lg:text-[28px] leading-snug my-6">
              The Solana Foundation is a non-profit organization headquartered
              in Zug, Switzerland, dedicated to the decentralization, growth,
              and security of the Solana network.
            </h4>
            <Link
              to="/"
              className="border-2 text-[#444bcb] border-[#444bcb] hover:bg-[#444bcb] hover:text-[#fff] px-2 py-5 text-xl font-semibold flex justify-center items-center gap-2 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg"
            >
              <span>Learn More about Solana</span> <BsArrowRight />
            </Link>
          </div>
          <div className="mt-8 sm:mt-0 flex justify-end">
            <img src={HeroImg} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAria;
