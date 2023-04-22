import { Link } from "react-router-dom";

const DelegationQuestions = () => {
  return (
    <div className="px-4 py-5 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-5">
      <div className="flex items-center justify-center gap-5">
        <a
          href="http://"
          target="_blank"
          className="border border-[#FF884D] px-12 py-3 rounded-md font-medium hover:bg-[#FF884D] hover:text-white"
          rel="noopener noreferrer"
        >
          Apply now
        </a>
        <div>
          <h4 className="text-[24px] font-medium">
            Still have questions? <br />
            Visit our <Link to="/faq">FAQ</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DelegationQuestions;
