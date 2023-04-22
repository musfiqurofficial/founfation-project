import About from "../../../assets/solana-ui.webp";
const AboutOpportunity = () => {
  return (
    <div className="mb-10">
      <div className="px-4 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5">
        <div className="grid lg:grid-cols-2 justify-between items-center gap-x-10 gap-y-16">
          <div className="bg-gradient p-10 text-white text-[18px] rounded-xl mt-5 sm:mt-0">
            <div className="flex gap-2 mb-10">
              <div className="p-2 rounded-full bg-[#ED6A5E]"></div>
              <div className="p-2 rounded-full bg-[#F5BE4F]"></div>
              <div className="p-2 rounded-full bg-[#62C454]"></div>
            </div>
            <p>
              <span className="text-red-800">$ solana</span> airdrop 1
            </p>
            <p className="mt-5">DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBUmG5CNSKK</p>
            <p className="my-5">--url https://api.devnet.solana.com</p>
            <p className="mb-20">Requesting airdrop of 1 SOL from</p>
          </div>
          <div>
            <h2 className="text-[52px] font-semibold leading-none mb-5">
              Opportunity <br /> through <br /> decentralization
            </h2>
            <p>
              We're opening doors to allow anyone to participate in the next
              phase of the internet.
            </p>
          </div>
         
          <div>
            <h2 className="text-[52px] font-semibold leading-none mb-5">
              The potential of a <br /> permissionless <br /> world
            </h2>
            <p>
              We're opening doors to allow anyone to participate in the next
              phase of the internet.
            </p>
          </div>
          <div className="">
            <img src={About} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOpportunity;
