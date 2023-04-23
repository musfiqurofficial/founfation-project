import AnalyticsPage from "./AnalyticsPage/AnalyticsPage";

const AnalyticBody = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 ">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1">
          <div className="bg-white p-10">
            <div className="sticky top-0">
              <h1 className="text-[32px] sm:text-[50px] font-semibold leading-tight">
                Table of Contents
              </h1>

              <div className="mt-6">
                <ul className="underline list-disc list-inside">
                  <li>Guidelines</li>
                  <li>Request for Proposals</li>
                  <li>
                    Application Process
                    <ul className="px-4 list-disc list-inside my-3">
                      <li>Application</li>
                      <li>Application Review</li>
                      <li>Decision</li>
                    </ul>
                  </li>
                  <li>Evaluation criteria & amount guidelines</li>
                  <li>
                    Alternative Funding Sources
                    <ul className="px-4 list-disc list-inside my-3">
                      <li>Application</li>
                      <li>Metaplex</li>
                      <li>Solana Ventures</li>
                      <li>Hackathons</li>
                      <li>Ecosystem Funds</li>
                    </ul>
                  </li>
                </ul>
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
    </div>
  );
};

export default AnalyticBody;
