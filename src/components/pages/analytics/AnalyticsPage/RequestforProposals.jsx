import React from "react";
import arrow from "../../../../assets/ar.png";

const RequestforProposals = () => {
  return (
    <div>
      <div>
        <h1 className="text-[32px] sm:text-[44px] font-semibold leading-tight">
          Request for Proposals
        </h1>
        <div className="flex items-start mt-5 gap-x-5">
          <div>
            <img src={arrow} className="w-16 h-auto" />
          </div>
          <div>
            <p className="">
              Below are a few categories of projects we’re interested in
              funding. You can also see a running list of specific project ideas{" "}
              <a
                className="text-[#9111f1]"
                target="_blank"
                rel="noreferrer"
                href="https://airtable.com/shrDbfJ1wktQ7pB6f/tbli2ERM3sdhyHJYB"
              >
                in our active RFP database.
              </a>
            </p>
            <div>
              <ul className="list-disc list-inside mt-5">
                <li>Censorship Resistance</li>

                <li>DAO Tooling</li>

                <li>Developer Tooling</li>

                <li>Education</li>

                <li>Payments / Solana Pay</li>

                <li>Financial Inclusion</li>

                <li>Climate Change</li>

                <li>Academic Research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestforProposals;
