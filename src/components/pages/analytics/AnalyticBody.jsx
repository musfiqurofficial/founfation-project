import React from "react";
import AnalyticsPage from "./AnalyticsPage/AnalyticsPage";

const AnalyticBody = () => {
  return (
    <div className="px-4 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="bg-white p-10 lg:sticky top-0 z-40">
          <h1 className="text-[50px] font-bold">Table of Contents</h1>

          <div className="mt-10">
            <p className="text-[20px] underline underline-offset-4">
              <li>Guidelines</li>
            </p>
            <p className="text-[20px] underline underline-offset-4">
              <li>Request for Proposals</li>
            </p>
            <p className="text-[20px] underline underline-offset-4">
              <li>Application Process</li>
            </p>
            <div className="ml-5">
              <p className="text-[20px] underline underline-offset-4">
                <li>Application</li>
              </p>
              <p className="text-[20px] underline underline-offset-4">
                <li>Application Review</li>
              </p>
              <p className="text-[20px] underline underline-offset-4">
                <li>Decision</li>
              </p>
            </div>
            <p className="text-[20px] underline underline-offset-4">
              <li>Evaluation criteria & amount guidelines</li>
            </p>
            <p className="text-[20px] underline underline-offset-4">
              <li>Alternative Funding Sources</li>
            </p>
            <div className="ml-5">
              <p className="text-[20px] underline underline-offset-4">
                <li>Metaplex</li>
              </p>
              <p className="text-[20px] underline underline-offset-4">
                <li>Solana Ventures</li>
              </p>
              <p className="text-[20px] underline underline-offset-4">
                <li>Hackathons</li>
              </p>
              <p className="text-[20px] underline underline-offset-4">
                <li>Ecosystem Funds</li>
              </p>
            </div>
          </div>

          <div
            id="dropdownDivider"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div className="py-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Separated link
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <AnalyticsPage></AnalyticsPage>
        </div>
      </div>
    </div>
  );
};

export default AnalyticBody;
