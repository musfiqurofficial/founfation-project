const HomeCensorship = () => {
  return (
    <div className="">
      <div className="px-4 py-5 sm:py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-[52px] font-bold leading-none mb-5">Censorship resistance, now.</h1>
            <p>
              The Solana Foundation is working to make the Solana protocol the
              most censorship resistant network in the world.
            </p>
          </div>
          <div>
            <div className="flex items-start divide-x divide-zinc-600 ">
                <h1 className="px-8 text-[36px] font-semibold text-[#444bcb]">1</h1>
                <p className="px-8">On the permissionless Solana network, anyone can participate in helping to secure the network as a validator. The Solana Foundation encourages new and existing validators to maintain high quality operations via the incentive structure of our Delegation Program.</p>
            </div>
            <div className="flex items-start divide-x divide-zinc-600 my-20">
                <h1 className="px-8 text-[36px] font-semibold text-[#F7CF20]">2</h1>
                <p className="px-8">Validator operators and RPC node operators may choose to participate in our Server Program to locate their operations in data centers distributed around the globe.</p>
            </div>
            <div className="flex items-start divide-x divide-zinc-600 ">
                <h1 className="px-8 text-[36px] font-semibold text-[#FF884D]">3</h1>
                <p className="px-8">Community members and token holders can choose to participate in Stake Pools to directly increase the censorship resistance of the network while potentially earning tokens at the same time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCensorship;
