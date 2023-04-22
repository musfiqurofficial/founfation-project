import React from "react";
import arrow from "../../../../assets/ar.png";

const Guidelines = () => {
  return (
    <div>
      <div>
        <h1 className="text-[50px] font-bold">Guidelines</h1>
        <div className="flex mt-7 gap-5">
         <div>
         <img src={arrow} className="w-[150px] h-auto"/>
         </div>
          <div>
          <p className="text-[20px]">
            Solana is an open-source, public blockchain. In that spirit, we
            support open-source projects that generate public goods for the
            community and give other ecosystem participants the opportunity to
            learn from and build on your work.
          </p>
          <p className="mt-[40px] text-[20px]">
          e can apply for a grant from the Solana Foundation. That includes individuals, independent teams, governments, nonprofits, companies, universities, and academics.
          </p>
          <p className="mt-[40px] text-[20px]">
          Here is the <a href="https://solana.org/grants#RequestforProposals"> list of initiatives</a> we are currently looking to fund. However, these are only exemplary and we welcome all ideas that fall under the broader scope of the Foundation’s mission.
          </p>
          <p className="mt-[40px] text-[20px]">
          As you consider ways to get your project off the ground, we recommend you also check out <a href=" https://solana.org/grants#AlternativeFundingSources" >Alternative Funding Sources.</a>
          </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Guidelines;
