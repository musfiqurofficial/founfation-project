import React from "react";
import arrow from "../../../../assets/ar.png";

const RequestforProposals = () => {
  return (
    <div>
      <div>
        <h1 className="text-[50px] font-bold">Request for Proposals</h1>
        <div className="flex mt-7 gap-5">
          <div>
            <img src={arrow} className="w-[150px] h-auto" />
          </div>
          <div>
            <p className="text-[20px]">
              Below are a few categories of projects we’re interested in
              funding. You can also see a running list of specific project ideas{" "}
              <a href="https://airtable.com/shrDbfJ1wktQ7pB6f/tbli2ERM3sdhyHJYB">
                in our active RFP database.
              </a>
            </p>
            <div>
             <p className="text-[20px]"><li>Censorship Resistance</li></p>
             <p className="text-[20px]"><li>DAO Tooling</li></p>
             <p className="text-[20px]"><li>Developer Tooling</li></p>
             <p className="text-[20px]"><li>Education</li></p>
             <p className="text-[20px]"><li>Payments / Solana Pay</li></p>
             <p className="text-[20px]"><li>Financial Inclusion</li></p>
             <p className="text-[20px]"><li>Climate Change</li></p>
             <p className="text-[20px]"><li>Academic Research</li></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestforProposals;
