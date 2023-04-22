import { Link } from "react-router-dom";
import HeroImg from "../../../assets/header-2.webp";
import { BsArrowRight } from "react-icons/bs";

const HeroAria = () => {
  return (
    <div className="-mb-20">
      <div className="px-4 py-5 sm:pt-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 h-auto sm:h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-0">
          <div className="mr-0 sm:mr-14 text-center sm:text-start">
            <h1 className="text-[50px] sm:text-[96px] font-[600] leading-none">
              The Solana Foundation
            </h1>
            <h4 className="text-[20px] sm:text-[32px] leading-snug my-10">
              The Solana Foundation is a non-profit organization headquartered
              in Zug, Switzerland, dedicated to the decentralization, growth,
              and security of the Solana network.
            </h4>
            <Link
              to="/"
              className="border-2 text-[#444bcb] border-[#444bcb] px-2 py-5 text-xl font-semibold flex justify-center items-center gap-2 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg"
            >
              <span>Learn More about Solana</span> <BsArrowRight />
            </Link>
          </div>
          <div className="mt-8 sm:mt-0">
            <img src={HeroImg} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAria;
