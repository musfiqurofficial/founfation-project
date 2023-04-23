import { ImArrowDownRight2 } from "react-icons/im";

const StakePromotes = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <h1 className="text-[40px] font-[600] leading-none mb-5">
              Promotes Decentralization
            </h1>
            <p>
              Stake pools help decentralize the network by delegating stake
              across many validator nodes. Each stake pool has its own unique
              validator criteria and delegation strategy, with some pools
              requiring that validators be geographically decentralized and meet
              minimum performance criteria in order to be added to the validator
              set.
            </p>
          </div>
          <div>
            <h1 className="text-[40px] font-[600] leading-none mb-5">
              Diversifies your stake investment
            </h1>
            <p>
              By delegating SOL to a stake pool instead of an individual
              validator, delegators help ensure stake (and therefore voting
              power) is decentralized across many validator nodes. This helps
              strengthen the Solana network in the long term. In addition,
              delegators receive liquid stake pool tokens which they can use on
              DeFi applications (a feature that is not available when staking to
              an individual validator).
            </p>
          </div>
          <div className="p-8 flex flex-col justify-between rounded-xl hover:drop-shadow-lg bg-[#FF884D99]">
            <h1 className="text-[40px] font-[600] leading-none">
              Become a pool manager
            </h1>
            <p className="text-[18px] mt-5 mb-10">
              Stake Pools are a liquid staking solution that promote censorship
              resistance, decentralization, and the growth of DeFi on Solana.
            </p>
            <a
              href="https://spl.solana.com/stake-pool"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border text-[#000] border-[#000] hover:bg-white px-5 py-3 text-[20px] font-semibold rounded-lg  w-full">
                Start a stake pool
              </button>
            </a>
          </div>
          <div className="p-8 flex flex-col justify-between rounded-xl hover:drop-shadow-lg bg-[#f7d02099]">
            <h1 className="text-[40px] font-[600] leading-none">
              Learn more about stake pools
            </h1>
            <p className="text-[18px] mt-5 mb-10">
              Learn more about each individual stake pool's delegation strategy,
              validator set, and performance metrics by using the data
              dashboards below.
            </p>
            <a
              href="https://www.validators.app/stake-pools?locale=en&network=mainnet"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border text-[#000] border-[#000] hover:bg-white px-5 py-3 text-[20px] font-semibold rounded-lg w-full mb-3">
                Validators.app
              </button>
            </a>
            <a
              href="https://solanacompass.com/stake-pools"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border text-[#000] border-[#000] hover:bg-white px-5 py-3 text-[20px] font-semibold rounded-lg  w-full mb-3">
                Solana Compass
              </button>
            </a>
            <a href="https://stakesolana.app/" target="_blank" rel="noreferrer">
              <button className="border text-[#000] border-[#000] hover:bg-white px-5 py-3 text-[20px] font-semibold rounded-lg  w-full ">
                Stake Solana
              </button>
            </a>
          </div>
        </div>
        <div className="">
          <h1 className="text-[28px] sm:text-[40px] font-[600] leading-none my-10">
            Current stake pools <br /> on Solana
          </h1>
          <div className="flex justify-between items-start gap-10">
            <ImArrowDownRight2 className="w-40" />
            <p>
              You can now improve the decentralization of the Solana blockchain
              by participating in stake pools. A stake pool spreads your
              delegation across many high quality validators. Liquid stake pools
              allow you to move in and out of the pool without warm-up or
              cool-down periods. See the links below to learn more about the
              different liquid staking solutions on Solana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakePromotes;
