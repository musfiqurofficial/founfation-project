import { Link } from "react-router-dom";

const TourText = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="px-5 sm:px-10 py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:max-w-screen-lg mx-auto">
          <h5 className="text-center text-xl font-medium mb-5">
            Apply to earn incentives for running a high-performance validator in
            a high-quality data center!
          </h5>
          <article>
            In an effort to encourage the geographic and hardware
            diversification of the Solana networks, Solana Foundation offers a
            performance-based incentive option for a limited number of
            validators who participate in the Foundation’s Delegation Program.
          </article>
          <article className="my-3">
            Through the Tour de Sun 22 incentives and the Server Program, the
            Solana Foundation is helping more validators and RPC operators
            access infrastructure suited to the requirements of the Solana
            network. These relationships also help establish more mutually
            beneficial connections between traditional hosting companies and
            Solana’s global community.
          </article>
          <p className="my-3">To get started, follow the steps below.</p>
          <p className="my-3 flex flex-col sm:flex-row items-center font-semibold gap-x-2">
            <span>For more information on this program please see the </span>
            <button>
              <Link
                to="/faq"
                className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] px-5 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg"
              >FAQ</Link>
              
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourText;
