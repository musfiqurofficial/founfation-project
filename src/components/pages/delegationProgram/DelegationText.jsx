const DelegationText = () => {
  return (
    <div>
      <div className="px-4 py-5 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-5">
        <article>
          A robust community of independent validators forms the backbone of the
          Solana network. The Solana Foundation strives to support the growth of
          this community while encouraging high performance, decentralized and
          secure node operations. Toward these goals, the Solana Foundation has
          committed to strategically delegating stake from its treasury in an
          effort to promote decentralization of the network.
        </article>
        <article className="my-3"> 
          Validators who choose to apply for the Solana Foundation’s Delegation
          Program may be eligible to receive a stake delegation from the Solana
          Foundation.
        </article>
        <article>
          A validator node must meet certain performance and decentralization
          criteria in order to receive the stake delegation from the Solana
          Foundation. Delegation sizes are dynamically adjusted based on an
          eligible validator’s performance.
        </article>
        <p className="my-3 flex items-center gap-5">
          <span>Check out a complete description of our</span>
          <button className="border border-[#FF884D] px-3 py-2 rounded-md font-medium hover:bg-[#FF884D] hover:text-white">Delegation criteria</button>
        </p>
        <p className="flex items-center gap-5">
          <span>For more information on this program please see the </span>
          <button className="border border-[#FF884D] px-3 py-2 rounded-md font-medium hover:bg-[#FF884D] hover:text-white">FAQ</button>
        </p>
      </div>
    </div>
  );
};

export default DelegationText;
