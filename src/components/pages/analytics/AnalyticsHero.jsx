import React from "react";
import img from "../../../assets/grants-rings.png";

const AnalyticsHero = () => {
  return (
    <div className=" px-4 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5">
      <div className="grid lg:grid-cols-2 justify-center items-center gap-8">
        <div>
          <h1 className="text-[80px] font-bold">Grants</h1>
          <p className="text-[30px]">
            The Solana Foundation Grants Program provides milestone-based
            funding to support initiatives aimed at decentralizing, growing, and
            securing the Solana network.
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-white border hover:border-blue-600 hover:text-blue-600 focus:ring-4  font-medium rounded-lg  text-[20px] px-6 py-3.5 text-center  "
            >
              Apply Now
            </button>
          </div>
        </div>
        <div>
          <img src={img} className="" />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsHero;
