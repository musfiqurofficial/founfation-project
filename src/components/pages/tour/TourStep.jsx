import { Link } from "react-router-dom";
import Img1 from "../../../assets/1.webp";
import Img2 from "../../../assets/2.webp";
import Img3 from "../../../assets/3.webp";
import Img4 from "../../../assets/4.webp";
import Img5 from "../../../assets/5.webp";
export const TourStep = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="">
        <div className="lg:py-6 lg:pr-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="border border-[#dedff8] rounded-lg text-center p-5">
              <h3 className="text-[26px] font-semibold text-start leading-tight mb-8">
                Create your validator identity keys for Testnet and Mainnet Beta
              </h3>
              <button className="border border-[#FF884D] px-3 py-2 rounded-md font-medium hover:bg-[#FF884D] hover:text-white w-full">
                Create Your Key
              </button>
              <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                <img src={Img1} className="mt-8 p-10" alt="" />
              </div>
              <Link
                to="https://docs.solana.com/clusters#testnet"
                className=" text-[#444bcb]"
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
            <div className="border border-[#dedff8] rounded-lg text-center p-5">
              <h3 className="text-[26px] font-semibold text-start leading-tight mb-8">
                Apply for the Foundation Delegation Program and pass KYC
              </h3>
              <button className="border border-[#FF884D] px-3 py-2 rounded-md font-medium hover:bg-[#FF884D] hover:text-white w-full">
                Apply Now
              </button>
              <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                <img src={Img2} className="mt-8 p-10" alt="" />
              </div>
            </div>
          </div>

          {/* card 3 and 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="border border-[#dedff8] rounded-lg text-center p-5">
              <h3 className="text-[26px] font-semibold text-start leading-tight mb-8">
                Start your Testnet validator
              </h3>
              <button className="border border-[#FF884D] px-3 py-2 rounded-md font-medium hover:bg-[#FF884D] hover:text-white w-full">
                Learn How
              </button>
              <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                <img src={Img3} className="mt-8 p-10" alt="" />
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
            <div className="border border-[#dedff8] rounded-lg text-center p-5">
              <h3 className="text-[26px] font-semibold text-start leading-tight ">
                Start voting
              </h3>
              <p className="my-3">Not sure how to start voting on Testnet?</p>
              <button className="border border-[#FF884D] px-3 py-2 rounded-md font-medium hover:bg-[#FF884D] hover:text-white w-full">
                Learn How
              </button>
              <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                <img src={Img4} className="mt-8 p-10" alt="" />
              </div>
            </div>
          </div>
          {/* card 5 and 6 */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="border border-[#dedff8] rounded-lg text-center p-5">
              <h3 className="text-[26px] font-semibold text-start leading-tight ">
                Get added to Testnet stake bot
              </h3>
              <p className="my-3 text-start">
                Your Testnet validator will automatically be added to the
                Testnet stake bot in the order you registered for the Delegation
                Program. 100 Testnet validators are added weekly. It may take a
                few months to be added.
              </p>
              <button className="border border-[#FF884D] px-3 py-2 rounded-md font-medium hover:bg-[#FF884D] hover:text-white w-full">
                Learn How
              </button>
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
  );
};
