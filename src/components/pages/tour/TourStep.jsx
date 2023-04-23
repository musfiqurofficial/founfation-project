import { Link } from "react-router-dom";
import Img1 from "../../../assets/1.webp";
import Img2 from "../../../assets/2.webp";
import Img3 from "../../../assets/3.webp";
import Img4 from "../../../assets/5.webp";
import Img5 from "../../../assets/8.webp";
import AR from "../../../assets/ar.png";

export const TourStep = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="">
          <div className="flex justify-start items-start gap-x-4 mb-10 sm:mb-20">
            <img className="w-8 sm:w-12" src={AR} alt="" />
            <h1 className="text-[30px] sm:text-[40px] font-semibold">
              Interested in the program? Here is a step by step walkthrough of
              what to expect after you apply.
            </h1>
          </div>
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="border border-[#ff884d66] rounded-lg text-center p-5 hover:shadow-md">
                <h3 className="text-[26px] font-semibold text-start leading-tight mb-8">
                  Sign up for Solana Foundation’s{" "}
                  <a
                    className="text-[#9111f1]"
                    href="https://solana.org/delegation-program"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Delegation Program
                  </a>
                </h3>
                <p className="my-3 text-start">
                  If you’re already participating in the Delegation Program and
                  are receiving stake on Testnet, skip to Step 2.
                </p>
                <a
                  href="https://solana.org/delegation-program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
                    Apply Now
                  </button>
                </a>
                <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                  <img src={Img1} className="mt-8 p-10" alt="" />
                </div>
                <Link
                  to="https://docs.solana.com/clusters#testnet"
                  className=" text-[#9111f1]"
                >
                  About Testnet and Mainnet Beta
                </Link>
              </div>
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <h1 className="text-lg font-semibold">1</h1>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div></div>
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <h1 className="text-lg font-semibold">2</h1>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="border border-[#ff884d66] rounded-lg text-center p-5 hover:shadow-md">
                <h3 className="text-[26px] font-semibold text-start leading-tight mb-8">
                  Sign up for TdS22
                </h3>
                <p className="mt-3 text-start">
                  During signup, you will confidentially associate your
                  Delegation Program validator pubkey with your incentive wallet
                  address.
                </p>
                <p className="my-3 text-start">
                  You will receive an email confirming your registration and
                  containing links to the next steps.
                </p>
                <a
                  href="https://solana.org/delegation-program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
                    Apply Now
                  </button>
                </a>
                <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                  <img src={Img2} className="mt-8 p-10" alt="" />
                </div>
              </div>
            </div>

            {/* card 3 and 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="border border-[#ff884d66] rounded-lg text-center p-5 hover:shadow-md">
                <h3 className="text-[26px] font-semibold text-start leading-tight mb-8">
                  Provision an eligible server
                </h3>
                <p className="my-3 text-start">
                  Get connected with top data center providers that want to
                  support the Solana network and community.
                </p>
                <a
                  href="https://edgevana.com/solana-validator-servers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
                    Get Server
                  </button>
                </a>

                <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                  <img src={Img4} className="mt-8 p-10" alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <h1 className="text-lg font-semibold">3</h1>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div></div>
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <h1 className="text-lg font-semibold">4</h1>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="border border-[#ff884d66] rounded-lg text-center p-5 hover:shadow-md">
                <h3 className="text-[26px] font-semibold text-start leading-tight ">
                  Launch your Testnet validator on your new server!
                </h3>
                <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
                  Launch validator
                </button>
                <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                  <img src={Img3} className="mt-8 p-10" alt="" />
                </div>
              </div>
            </div>
            {/* card 5 and 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="border border-[#ff884d66] rounded-lg text-center p-5 hover:shadow-md">
                <h3 className="text-[26px] font-semibold text-start leading-tight ">
                  Monitor your validator
                </h3>
                <p className="my-3 text-start">
                  For every epoch in which your node meets all the Testnet a{" "}
                  <Link to="https://solana.org/delegation-criteria">
                    Delegation Criteria
                  </Link>{" "}
                  for Bonus stake while running on an eligible server, you will
                  earn a portion of the incentive!
                </p>
                <a
                  href="https://docs.solana.com/running-validator/validator-start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
                    Monitor validator
                  </button>
                </a>
                <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                  <img src={Img5} className="mt-8 p-10" alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <h1 className="text-lg font-semibold">5</h1>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
