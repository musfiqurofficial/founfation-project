import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import Img1 from "../../../assets/1.webp";
import Img2 from "../../../assets/2.webp";
import Img3 from "../../../assets/3.webp";
import Img4 from "../../../assets/5.webp";
import Img5 from "../../../assets/8.webp";
import { Link } from "react-router-dom";

const TourTimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#fff", color: "#000" }}
        contentArrowStyle={{ borderRight: "10px solid  #44167E" }}
        iconStyle={{ background: "#44167E", color: "#fff" }}
        icon={<RiNumber1 className="text-white" />}
      >
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
                  <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 mt-5 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
                    Apply Now
                  </button>
                </a>
                <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                  <img src={Img1} className="mt-8 p-10" alt="" />
                </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#fff", color: "#000" }}
        contentArrowStyle={{ borderRight: "10px solid  #44167E" }}
        iconStyle={{ background: "#44167E", color: "#fff" }}
        icon={<RiNumber2 className="text-white" />}
      >
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
                  <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 mt-5 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
                    Apply Now
                  </button>
                </a>
                <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                  <img src={Img2} className="mt-8 p-10" alt="" />
                </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#fff", color: "#000" }}
        contentArrowStyle={{ borderRight: "10px solid  #44167E" }}
        iconStyle={{ background: "#44167E", color: "#fff" }}
        icon={<RiNumber3 className="text-white" />}
      >
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
                  <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 mt-5 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
                    Get Server
                  </button>
                </a>

                <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
                  <img src={Img4} className="h-96 mt-8 p-10" alt="" />
                </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#fff", color: "#000" }}
        contentArrowStyle={{ borderRight: "10px solid  #44167E" }}
        iconStyle={{ background: "#44167E", color: "#fff" }}
        icon={<RiNumber4 className="text-white" />}
      >
        <h3 className="text-[26px] font-semibold text-start leading-tight ">
          Launch your Testnet validator on your new server!
        </h3>
        <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 mt-5 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
          Launch validator
        </button>
        <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
          <img src={Img3} className="mt-8 p-10" alt="" />
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#fff", color: "#000" }}
        contentArrowStyle={{ borderRight: "10px solid  #44167E" }}
        iconStyle={{ background: "#44167E", color: "#fff" }}
        icon={<RiNumber5 className="text-white" />}
      >
        <h3 className="text-[26px] font-semibold text-start leading-tight ">
          Monitor your validator
        </h3>
        <p className="my-3 text-start">
          For every epoch in which your node meets all the Testnet a{" "}
          <Link to="https://solana.org/delegation-criteria">
            Delegation Criteria
          </Link>{" "}
          for Bonus stake while running on an eligible server, you will earn a
          portion of the incentive!
        </p>
        <a
          href="https://docs.solana.com/running-validator/validator-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] py-3 mt-5 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg w-full">
            Monitor validator
          </button>
        </a>
        <div className="bg-[#f7f7f7f7] rounded-lg mb-3">
          <img src={Img5} className="mt-8 p-10" alt="" />
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TourTimeLine;
