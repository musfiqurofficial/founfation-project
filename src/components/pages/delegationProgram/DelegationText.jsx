import { Link } from "react-router-dom";

const DelegationText = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="px-5 sm:px-10 py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:max-w-screen-lg mx-auto">
          <article>
            A robust community of independent validators forms the backbone of
            the Solana network. The Solana Foundation strives to support the
            growth of this community while encouraging high performance,
            decentralized and secure node operations. Toward these goals, the
            Solana Foundation has committed to strategically delegating stake
            from its treasury in an effort to promote decentralization of the
            network.
          </article>
          <article className="my-3">
            Validators who choose to apply for the Solana Foundation’s
            Delegation Program may be eligible to receive a stake delegation
            from the Solana Foundation.
          </article>
          <article>
            A validator node must meet certain performance and decentralization
            criteria in order to receive the stake delegation from the Solana
            Foundation. Delegation sizes are dynamically adjusted based on an
            eligible validator’s performance.
          </article>
          <p className="my-3 flex flex-col sm:flex-row items-center font-semibold gap-x-2">
            <span>Check out a complete description of our</span>
            <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] px-5 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg">
              Delegation criteria
            </button>
          </p>
          <p className="my-3 flex flex-col sm:flex-row items-center font-semibold gap-x-2">
            <span>For more information on this program please see the </span>
            <button>
              <Link
                to="/faq"
                className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] px-5 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg"
              >
                FAQ
              </Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DelegationText;
