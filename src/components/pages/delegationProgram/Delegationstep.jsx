
import AR from "../../../assets/ar.png";
import TimeLineComponent from "./TimeLineComponent";

export const Delegationstap = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:max-w-screen-lg mx-auto">
        <div className="flex justify-start items-start gap-x-4 mb-10 sm:mb-20">
            <img className="w-8 sm:w-12" src={AR} alt="" />
            <h1 className="text-[30px] sm:text-[40px] font-semibold">Interested in the program? Here is a step by step walkthrough of what to expect after you apply.</h1>
          </div>
          <TimeLineComponent/>
        </div>
      </div>
    </div>
  );
};
