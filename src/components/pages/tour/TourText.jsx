import { Link } from "react-router-dom";

const TourText = () => {
  return (
    <div>
      <div className="px-4 py-5 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-5">
        <h5 className="text-center text-xl font-medium mb-5">
          Apply to earn incentives for running a high-performance validator in a
          high-quality data center!
        </h5>
        <article>
          In an effort to encourage the geographic and hardware diversification
          of the Solana networks, Solana Foundation offers a performance-based
          incentive option for a limited number of validators who participate in
          the Foundation’s Delegation Program.
        </article>
        <article className="my-3">
          Through the Tour de Sun 22 incentives and the Server Program, the
          Solana Foundation is helping more validators and RPC operators access
          infrastructure suited to the requirements of the Solana network. These
          relationships also help establish more mutually beneficial connections
          between traditional hosting companies and Solana’s global community.
        </article>
        <p className="my-3">
          To get started, follow the steps below.
        </p>
        <p className="flex items-center gap-5">
          <span>For more information on this program please see the </span>
          <Link
            to="/faq"
            className="border border-[#FF884D] px-3 py-2 rounded-md font-medium hover:bg-[#FF884D] hover:text-white"
          >
            FAQ
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TourText;
