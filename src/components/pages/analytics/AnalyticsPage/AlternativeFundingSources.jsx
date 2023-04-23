import arrow from "../../../../assets/ar.png";

const AlternativeFundingSources = () => {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[44px] font-semibold leading-tight">
        Alternative Funding Sources
      </h1>

      <div className="flex mt-7 gap-5 text-sm">
        <div>
          <img src={arrow} className="w-24 h-auto" />
        </div>

        <div>
          <p className="mb-8">
            There are many sources of funding available to projects in the
            Solana ecosystem. Depending on your proposal or progress, some might
            be better suited to your needs than others.
          </p>

          <div className="flex justify-center items-center gap-5">
            <div className="">
              <div className="h-[80px] bg-gray-200 w-[1px]"></div>
            </div>
            <div>
              <h1 className="text-[20px] font-medium">Metaplex</h1>
              <p className="mt-2">
                Metaplex grants seek to support creators from underrepresented
                communities and key infrastructure projects in the Solana NFT
                ecosystem.{" "}
                <a
                  className="text-[#9111f1]"
                  target="_blank"
                  rel="noreferrer"
                  href="https://share.hsforms.com/1HoERhcmiRwe0cjPSSs_legccjgz?__hstc=266004944.11fd4022bd77af6bb9fc1c23bb14a7ac.1639599576222.1644962999554.1644968421351.64&__hssc=266004944.1.1644968421351&__hsfp=384892113"
                >
                  {" "}
                  Apply here.
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-5 justify-center items-center mt-8">
            <div className="">
              <div className="h-[100px] bg-gray-200 w-[1px]"></div>
            </div>
            <div>
              <h1 className="text-[20px] font-medium">Solana Ventures</h1>
              <p className="mt-2">
                Solana Venture’s mission is to accelerate the growth of the
                Solana blockchain and adjacent ecosystems by providing capital
                and business support to the most promising teams building in the
                crypto ecosystem. Solana Ventures invests primarily in the
                pre-seed or seed stages of companies and is more heavily
                weighted towards token-based investments.{" "}
                <a
                  className="text-[#9111f1]"
                  target="_blank"
                  rel="noreferrer"
                  href="http://solana.ventures/"
                >
                  Contact Solana Ventures.
                </a>
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5 mt-8">
            <div className="">
              <div className="h-[200px] bg-gray-200 w-[1px]"></div>
            </div>
            <div>
              <h1 className="text-[20px] font-medium">Hackathons</h1>
              <p className="mt-2">
                Solana Hackathons allow anyone with an internet connection to
                jumpstart their next project on Solana and join the fastest
                ecosystem in crypto.
              </p>
              <p className="mt-4">
                Past prizes have exceeded $10,000,000 and have been distributed
                to projects in DeFi, Web3, and NFT.
              </p>
              <p className="mt-4">
                Moreover, teams that have participated in these hackathons have
                often attracted the interest of investors keen on supporting
                strong new projects -- even if they were not ultimately selected
                for a hackathon specific prize.
              </p>
              <p className="mt-4">
                For more information on the latest Hackathon see the{" "}
                <a
                  className="text-[#9111f1]"
                  target="_blank"
                  rel="noreferrer"
                  href="https://solana.com/hackathon"
                >
                  Hackathon Hub here.
                </a>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 mt-8">
            <div className="">
              <div className="h-[150px] bg-gray-200 w-[1px]"></div>
            </div>
            <div>
              <h1 className="text-[20px] font-medium">Ecosystem Funds</h1>
              <p className="mt-2">
                The Solana Foundation partnered with different stakeholders
                across the world and launched ecosystem funds dedicated to
                nurturing the Solana developer ecosystem. Multiple ecosystem
                funds are actively investing in projects building on the Solana
                blockchain. Their main goal is to provide projects with various
                resources, such as: funding, strategic advisory, industry
                connections, go to market strategy, and other extensive support
                to build meaningful products.
              </p>
              <p className="mt-4">
                You can find a list of active ecosystem funds browsing the
                “funds” tab{" "}
                <a
                  className="text-[#9111f1]"
                  target="_blank"
                  rel="noreferrer"
                  href="https://solana.com/ecosystem/explore?categories=fund"
                >
                  on the Ecosystem page.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativeFundingSources;
