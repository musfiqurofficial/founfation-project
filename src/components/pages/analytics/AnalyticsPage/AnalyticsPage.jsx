import Guidelines from "./Guidelines";
import RequestforProposals from "./RequestforProposals";
import ProcessOverview from "./ProcessOverview";
import CriteriaForEvaluation from "./CriteriaForEvaluation";
import AlternativeFundingSources from "./AlternativeFundingSources";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const AnalyticsPage = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <div className="h-[4800px] bg-gray-400 w-[1px]"></div>
        </div>
        <div className="bg-white p-10">
          <Guidelines></Guidelines>
          <hr className="max-w-screen-lg mx-auto my-8 border-t border-gray-200" />

          <RequestforProposals></RequestforProposals>
          <hr className="max-w-screen-lg mx-auto my-8 border-t border-gray-200" />

          <ProcessOverview></ProcessOverview>
          <hr className="max-w-screen-lg mx-auto my-8 border-t border-gray-200" />

          <CriteriaForEvaluation></CriteriaForEvaluation>
          <hr className="max-w-screen-lg mx-auto my-8 border-t border-gray-200" />

          <AlternativeFundingSources></AlternativeFundingSources>
          <hr className="max-w-screen-lg mx-auto my-8 border-t border-gray-200" />
          <div className="mt-">
            <button>
              <Link
                to="/"
                className="border text-[#444bcb] border-[#444bcb] hover:bg-[#ffffff45] hover:bg-[#444bcb] hover:text-[#444bcb] px-10 py-5 text-xl font-semibold flex justify-center items-center gap-2 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg"
              >
                <span>Apply now</span> <BsArrowRight />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
