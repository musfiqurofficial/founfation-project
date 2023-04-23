import IMG1 from "../../../assets/1 (1).webp";
import IMG2 from "../../../assets/2 (1).webp";
import IMG3 from "../../../assets/3 (1).webp";
import AR from "../../../assets/ar.png";

import { SiDiscord, SiTwitter } from "react-icons/si";
const DelegationStay = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:max-w-screen-lg mx-auto">
          <div className="flex justify-start items-center gap-x-4">
            <img className="w-8 sm:w-12" src={AR} alt="" />
            <h1 className="text-[32px] sm:text-[44px] font-semibold">Stay in the loop</h1>
          </div>
          <hr className="max-w-screen-xl mx-auto border-t my-10 border-gray-200" />
          <div className="grid lg:grid-cols-2 justify-between items-center gap-x-10 mb-14">
            <div className="p-8 rounded-lg shadow bg-[#f7f7f7f7]">
              <img className="mb-10 sm:mb-0" src={IMG1} alt="" />
            </div>
            <div>
              <h3 className="text-[28px] font-semibold mb-5 mt-5 lg:mt-5">
                Learn more about when you’ll be onboarded by reading about the
                criteria
              </h3>
              <a
                className="text-[#9111f1] font-medium"
                href="https://solana.org/faq#onboarding_calculations"
                target="_blank"
                rel="noopener noreferrer"
              >
                Onboarding criteria
              </a>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse justify-between items-center gap-x-10 mb-14">
            <div>
              <h3 className="text-[28px] font-semibold mb-5 mt-5 lg:mt-5">
                Learn more about the Foundation Program
              </h3>
              <a
                className="text-[#9111f1] font-medium"
                href="https://solana.org/delegation-criteria"
                target="_blank"
                rel="noopener noreferrer"
              >
                Delegation criteria
              </a>
            </div>
            <div className="p-8 rounded-lg shadow bg-[#f7f7f7f7]">
              <img
                className="w-auto h-60 mx-auto mb-10 sm:mb-0"
                src={IMG2}
                alt=""
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 justify-between items-center gap-x-10 mb-14">
            <div className="p-8 rounded-lg shadow bg-[#f7f7f7f7]">
              <img
                className="w-auto h-60 mx-auto mb-10 sm:mb-0"
                src={IMG3}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-[28px] font-semibold mb-5 mt-5 lg:mt-5">
                Subscribe to Discord and Twitter alerts to learn more about any
                changes in requirements
              </h3>
              <a
                className="text-[#444bcb] border border-[#444bcb] py-3 rounded-md font-medium hover:bg-[#444bcb] hover:text-white w-full flex justify-center items-center gap-4"
                href="https://solana.org/faq#onboarding_calculations"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Send me Discord alerts</span>
                <SiDiscord />
              </a>
              <a
                className="mt-2 text-[#444bcb] border border-[#444bcb] py-3 rounded-md font-medium hover:bg-[#444bcb] hover:text-white w-full flex justify-center items-center gap-4"
                href="https://twitter.com/solana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Send me Twitter alerts</span>
                <SiTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelegationStay;
