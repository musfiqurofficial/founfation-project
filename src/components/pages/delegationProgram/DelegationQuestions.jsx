import { Link } from "react-router-dom";

const DelegationQuestions = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-5">
          <a
            href="http://"
            target="_blank"
            className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] px-20 py-3 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg"
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
    </div>
  );
};

export default DelegationQuestions;
