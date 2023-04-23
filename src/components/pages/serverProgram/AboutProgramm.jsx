import FaqItem from "./FaqItem";
import AR from "../../../assets/ar.png";

const AboutProgramm = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:max-w-screen-lg mx-auto">
          <h1 className="text-[50px] font-bold mb-6">About this program</h1>
          <article>
            Good servers are a key component of a network’s operations. However,
            getting access to new servers can sometimes be difficult for
            individuals. For that reason, the Solana Foundation has advocated on
            behalf of the Solana validator community with several data centers
            providers across the world in order to offer servers to the Solana
            ecosystem for lease with flexible, month-to-month contracts.
          </article>
          <article className="my-3">
            This optional program is designed to foster sustainable growth in
            the validator and RPC community, and further decentralize the Solana
            network.
          </article>

          {/* 1st Step Description */}
          <div>
            <h2 className="text-[18px] font-semibold my-6">
              How does the process work?
            </h2>
            
            {/* 1st des */}
            <div className="flex items-center my-10">
              <div className="w-16 mr-4 hidden sm:block">
              <img src={AR} className="w-8" alt="" />
              </div>
              <div className="w-16 mr-4 border-r text-[40px] font-medium border-gray-300 py-2 text-[#444bcb]">
                1
              </div>

              <div className="flex-1">
                Sign up for the program using the “Sign up here” button above.
                Individuals will be prompted to complete the KYC (“Know Your
                Customer”) process at this point. The KYC process is necessary
                to participate in the program.
              </div>
            </div>
            {/* 2nd */}
            <div className="flex items-center my-10">
              <div className="w-16 mr-4 hidden sm:block"></div>
              <div className="w-16 mr-4 border-r text-[40px] font-medium border-gray-300 py-2 text-[#F7CF20]">
                2
              </div>

              <div className="flex-1">
                Eligible individuals will then receive a welcome email and
                Server Program Agreement (SPA) which will be sent to the email
                provided.
              </div>
            </div>

            <div className="flex items-center my-10">
              <div className="w-16 mr-4 hidden sm:block"></div>
              <div className="w-16 mr-4 border-r text-[40px] font-medium border-gray-300 py-2 text-[#FF884D]">
                3
              </div>

              <div className="flex-1">
                Once the SPA is signed, individuals will be connected with one
                of the participating data center providers in order to get
                access to the server(s).
                <br /> <br /> Be sure to use the same email you provided during
                the KYC process as the providers will use this information to
                confirm individuals are eligible to participate.
              </div>
            </div>
          </div>

          {/* 2nd Step Description */}
          <div>
            {/* 1st des */}
            <div className="lg:flex flex-none my-10">
              <div className="w-16 mr-4 mb-5 lg:mb-0">
                <h1 className="text-[28px] sm:text-[48px] font-semibold">
                  FAQs
                </h1>
              <img src={AR} className="w-8" alt="" />

              </div>
              <div className="sm:w-16 mr-4 border-r-2 text-[40px] font-medium border-gray-300 my-2"></div>

              <div className="flex-1 text-lg font-semibold ml-8">
                If I sign the Server Program agreement with the Foundation am I
                required to lease a server from a data center? <br /> <br />{" "}
                <span className="font-light text-[16px]">
                  No. Signing the Server Program Agreement does not obligate you
                  to lease a server from a data center.
                </span>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  What is the pricing for these servers? <br /> <br />{" "}
                  <span className="font-light text-[16px]">
                    Exact server pricing can be obtained directly from the
                    applicable Data Center provider after signing up for the
                    program.
                  </span>
                  <br />
                  <br />
                  <br />
                  <hr />
                </div>
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  Who are the Data Center partners? <br /> <br />{" "}
                  <span className="font-light text-[16px]">
                    The Solana Foundation has engaged with Edgevana, Equinix,
                    and Stackpath, and will be announcing other data center
                    providers later this year as they come online.
                  </span>
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  What are the server specs? <br /> <br />{" "}
                  <span className="font-light text-[16px]">
                    All servers have been spec’d to meet the needs of the
                    network with a long term view. These specs should be
                    sufficient for both RPC and Validator nodes.
                  </span>
                </div>
                {/* According */}
                <FaqItem></FaqItem>
                <hr />
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  How long does it take to sign up and get access? <br /> <br />{" "}
                  <span className="font-light text-[16px]">
                    Start-to-finish the process should only take a few days,
                    though it can get done in as little as one day. The
                    Foundation has tried to make it as simple as possible to
                    help individuals get access to infrastructure in a timely
                    manner.
                  </span>
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  Are there commitments? <br /> <br />{" "}
                  <span className="font-light text-[16px]">
                    This special infrastructure and pricing is only available
                    with a minimum commitment of one month.
                  </span>
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  How does billing & invoicing work? <br /> <br />{" "}
                  <span className="font-light text-[16px]">
                    When you sign up with a participating data center you will
                    enter your credit card information and be billed monthly by
                    them directly.
                  </span>
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  Does the Solana Foundation profit from the sales of hardware
                  by partners in this program? <br /> <br />{" "}
                  <span className="font-light text-[16px]">
                    No. The Solana Foundation has committed to enabling this
                    program through a bulk purchasing agreement. The Foundation
                    does not receive kickbacks or profit sharing with third
                    party data centers in any way. The Solana Foundation is a
                    non-profit on a mission to help build the most censorship
                    resistant network possible.
                  </span>
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  What about security? What am I responsible for? <br /> <br />{" "}
                  <span className="font-light text-[16px]">
                    You’re responsible for the ongoing maintenance and security
                    of the servers you deploy with the Data Center partners.
                    This includes securing each server, and responding to any
                    exploits, abuses, or other behaviors that are prohibited
                    under the Data Center partners MSA. You are also responsible
                    for any terms and conditions required by the third party
                    data centers.
                  </span>
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  What happens if my hardware has a problem? <br /> <br />{" "}
                  <span className="font-light text-[16px]">
                    Hardware can fail over time. If you detect a failure, please
                    contact the service provider’s support to arrange for a new
                    machine.
                  </span>
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <br />
                <div className="flex-1 text-lg font-semibold">
                  **All participants in the Server Program are subject to the
                  terms and conditions of the{" "}
                  <a
                    className="text-indigo-600"
                    href="https://solana.org/server-program"
                  >
                    {" "}
                    Server Program Agreement
                  </a>{" "}
                  as well as the terms and conditions required by any data
                  center participant in the program. <br /> <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProgramm;
