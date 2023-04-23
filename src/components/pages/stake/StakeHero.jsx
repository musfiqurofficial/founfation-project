const StakeHero = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-5 sm:px-10 py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl bg-gradient rounded-xl shadow-2xl">
        <div className="flex-none lg:flex justify-around items-center gap-10 text-white text-center lg:text-start">
          <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-none">
            Stake Pools
          </h1>
          <p className="md:text-lg lg:text-[20px] mt-5 lg:mt-0">
            On Solana, stake pools are a collection of one or more validator
            nodes. In this way, delegators can stake to many validators at once,
            instead of staking to just one validator. In most instances,
            delegators will receive a liquid stake pool token in exchange for
            staking to a stake pool. By using a stake pool to distribute their
            staked SOL, delegators increase decentralization while receiving
            protection against any one validator node’s unexpected downtime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StakeHero;
