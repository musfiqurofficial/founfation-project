import { RiArrowRightDownLine } from "react-icons/ri";

const AboutCensorship = () => {
  return (
    <div className="mb-10">
      <div className="px-4 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5">
        <h1 className="text-[56px] font-bold leading-none mb-10">
          What is censorship <br /> resistance?
        </h1>
        <div className=" max-w-screen-lg mx-auto grid grid-cols-2 gap-8 ">
          <div className="flex flex-col justify-between">
            <article>
              A core feature of the Solana network is the ability for everyone
              to have equal access to all information written to the blockchain
              ledger. Similarly, anyone should have equal and fair access to
              make changes to the ledger by submitting transactions at any time.
            </article>
            <article className="my-5">
              Censorship happens when any user or application is prevented from
              doing either of these things, for any reason.
            </article>
            <article>
              A censorship resistant network is therefore one in which it
              becomes increasingly difficult or impossible for users to be
              censored either due to unintentional reasons such as computer or
              infrastructure failure or due to intentional reasons such as
              malicious activity from one or more entities on the network
            </article>
          </div>
          <div className="flex flex-col justify-between">
            <article>
              A common metric for quantifying censorship resistance is the
              superminority. The superminority refers to the minimum number of
              nodes on the network that would need to be simultaneously
              compromised in order to censor new transactions or prevent new
              blocks from being added to the blockchain. As the superminority
              increases, so increases the security and resilience of the Solana
              network.
            </article>
            <h6>You can find Solana’s superminority here:</h6>
            <p>
              <a
                href="https://solanabeach.io/"
                className="flex items-center gap-2 text-[#9111f1]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiArrowRightDownLine />
                <span className="font-semibold">solanabeach.io</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCensorship;
