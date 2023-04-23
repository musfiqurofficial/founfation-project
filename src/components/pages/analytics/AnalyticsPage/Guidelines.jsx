import React from "react";
import arrow from "../../../../assets/ar.png";

const Guidelines = () => {
  return (
    <div>
      <div>
        <h1 className="text-[32px] sm:text-[44px] font-semibold leading-tight">
          Guidelines
        </h1>
        <div className="flex items-start mt-5 gap-x-5">
          <div>
            <img src={arrow} className="w-24 h-auto" />
          </div>
          <div>
            <p className="">
              Solana is an open-source, public blockchain. In that spirit, we
              support open-source projects that generate public goods for the
              community and give other ecosystem participants the opportunity to
              learn from and build on your work.
            </p>
            <p className="mt-5">
              e can apply for a grant from the Solana Foundation. That includes
              individuals, independent teams, governments, nonprofits,
              companies, universities, and academics.
            </p>
            <p className="mt-5">
              Here is the{" "}
              <a href="https://solana.org/grants#RequestforProposals">
                {" "}
                list of initiatives
              </a>{" "}
              we are currently looking to fund. However, these are only
              exemplary and we welcome all ideas that fall under the broader
              scope of the Foundation’s mission.
            </p>
            <p className="mt-5">
              As you consider ways to get your project off the ground, we
              recommend you also check out{" "}
              <a href=" https://solana.org/grants#AlternativeFundingSources">
                Alternative Funding Sources.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
