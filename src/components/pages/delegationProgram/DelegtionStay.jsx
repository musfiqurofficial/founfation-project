import IMG1 from "../../../assets/1 (1).webp";
import IMG2 from "../../../assets/2 (1).webp";
import IMG3 from "../../../assets/3 (1).webp";
import { SiDiscord, SiTwitter } from "react-icons/si";
const DelegationStay = () => {
  return (
    <div>
      <div className="px-4 py-5 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-5">
        <h1>Stay in the loop</h1>
        <hr className="max-w-screen-lg mx-auto border-t my-10 border-gray-400" />
        <div className="grid grid-cols-2 justify-between items-center gap-x-10 mb-14">
          <div className="p-8 rounded-lg shadow bg-[#f7f7f7f7]">
            <img className="" src={IMG1} alt="" />
          </div>
          <div>
            <h3 className="text-[28px] font-semibold mb-5">
              Learn more about when you’ll be onboarded by reading about the
              criteria
            </h3>
            <a
              className="text-[#444bcb]"
              href="https://solana.org/faq#onboarding_calculations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Onboarding criteria
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between items-center gap-x-10 mb-14">
          <div>
            <h3 className="text-[28px] font-semibold mb-5">
              Learn more about the Foundation Program
            </h3>
            <a
              className="text-[#444bcb]"
              href="https://solana.org/delegation-criteria"
              target="_blank"
              rel="noopener noreferrer"
            >
              Delegation criteria
            </a>
          </div>
          <div className="p-8 rounded-lg shadow bg-[#f7f7f7f7]">
            <img className="w-auto h-60 mx-auto" src={IMG2} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between items-center gap-x-10 mb-14">
          <div className="p-8 rounded-lg shadow bg-[#f7f7f7f7]">
            <img className="w-auto h-60 mx-auto" src={IMG3} alt="" />
          </div>
          <div>
            <h3 className="text-[28px] font-semibold mb-5">
              Subscribe to Discord and Twitter alerts to learn more about any
              changes in requirements
            </h3>
            <a
              className="text-[#444bcb] border border-[#444bcb] px-20 py-3 rounded-md font-medium hover:bg-[#444bcb] hover:text-white w-full flex justify-center items-center gap-4"
              href="https://solana.org/faq#onboarding_calculations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Send me Discord alerts</span>
              <SiDiscord />
            </a>
            <a
              className="mt-2 text-[#444bcb] border border-[#444bcb] px-20 py-3 rounded-md font-medium hover:bg-[#444bcb] hover:text-white w-full flex justify-center items-center gap-4"
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
  );
};

export default DelegationStay;
