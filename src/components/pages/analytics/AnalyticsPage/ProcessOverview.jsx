import arrow from "../../../../assets/ar.png";

const ProcessOverview = () => {
  return (
      <div>
        <h1 className="text-[32px] sm:text-[44px] font-semibold leading-tight">
          Process Overview
        </h1>
        <div className="flex mt-7 gap-5">
          <div>
            <img src={arrow} className="w-24 h-auto" />
          </div>

          <div>
            <div className="flex gap-5">
              <div className=" flex justify-center items-center">
              <div className="h-[150px] bg-gray-200 w-[1px]"></div>
              </div>

              <div>
                <h1 className="text-[20px] font-medium">Application</h1>
                <p className="mt-2 text-sm">
                  In your application, be sure to clarify how your project
                  creates a public good for the Solana network, typically
                  through furthering decentralization, open sourcing code, or
                  helping to secure the Solana network.
                </p>
                <p className="mt-[20px]">
                  Grants are milestone-based. Thoughtful applications include
                  suggested milestones for funding.
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-[30px]">
              <div className="flex justify-center items-center">
                <div className="h-[150px] bg-gray-200 w-[1px]"></div>
              </div>
              <div>
                <h1 className="text-[20px] font-medium">Application Review</h1>
                <p className="mt-2 text-sm">
                  Our team will review all applications on a rolling basis,
                  determine if more information is required, and then schedule a
                  call with the team if necessary. At that point, we may revert
                  with additional questions or ideas.
                </p>
                <p className="mt-[20px] text-sm">
                  We receive many applications and work as quickly as we can to
                  process them. We’ll get back to you as soon as possible with
                  next steps, typically within 2 weeks.
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-[30px]">
              <div className="flex justify-center items-center">
                <div className="h-[50px] bg-gray-200 w-[1px]"></div>
              </div>
              <div>
                <h1 className="text-[20px] font-medium">Decision</h1>
                <p className="mt-2 text-sm">
                  Applicants will be notified via email whether their proposal
                  has been accepted or not.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProcessOverview;
