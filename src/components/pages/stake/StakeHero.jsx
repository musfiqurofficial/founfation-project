const StakeHero = () => {
  return (
    <div className="my-20">
      <div className="px-4 py-5 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 bg-gradient rounded-xl shadow-2xl">
        <div className="flex justify-around items-center text-white p-8 gap-x-10">
          <h1 className="text-[56px] font-bold leading-none">
            Stake <br /> Pools
          </h1>
          <p className="text-lg">
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
