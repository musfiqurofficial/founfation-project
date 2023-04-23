import { NavLink } from "react-router-dom";
import { useState } from "react";
import Daopool from "../../../assets/daopool.webp";
import Jpool from "../../../assets/jpool.webp";
import Lido from "../../../assets/lido.webp";
import Marinade from "../../../assets/marinade.webp";
import socean from "../../../assets/socean.webp";
import EverSOL from "../../../assets/EverSOL_logo_white.9d88f37d.svg";
import Blaze from "../../../assets/blaze_stake.webp";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const StakeDelegation = () => {

  const [showHello, setShowHello] = useState(true);

  const handleMenuClick = (showHello) => {
    setShowHello(showHello);
  };

  const menu = (
    <>
      <li
        className="hover:text-[#444bcb] text-xs sm:text-xl font-semibold "
        onClick={() => handleMenuClick(true)}
      >
        Delegation strategy
      </li>
      <li
        className="hover:text-[#444bcb] text-xs sm:text-xl font-semibold"
        onClick={() => handleMenuClick(false)}
      >
        How to get a delegation
      </li>
    </>
  );

  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div>
          <ul className="flex item-center justify-center gap-5">{menu}</ul>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-14 mt-10">
            <div>
              <div className="bg-[#0e0d0d] p-3 rounded-md mb-2">
                <img className="w-3/4 mx-auto" src={Daopool} alt="" />
              </div>
              {showHello ? (
                <div>
                  <Item title="Delegation strategy">
                    MonkeDAO's delegation strategy for DAOPool looks first at
                    helping DAO’s and community focused projects breakeven on
                    the cost of running their validator. They will also track
                    the performance of validators and may reduce stake, if a
                    validator becomes delinquent. To that end, "the set of
                    validators eligible to receive SOL from the DAOPool will
                    consist of NFT DAOs and other community-run validators as
                    requested from the MonkeDAO. Ideally, the DAOPool will
                    support an ever-growing community of Solana validators
                    operated by DAOs across the ecosystem, especially newer
                    validators that are still seeking to reach the breakeven
                    point. It is also our hope that the DAOPool will also help
                    to remove a sense of competition on this topic — this should
                    represent a community effort to push the ecosystem towards
                    decentralization. Read more about DAOPool.
                  </Item>
                </div>
              ) : null}
              {!showHello ? (
                <div>
                  <Item title="How to get a delegation">
                    MonkeDAO is inviting teams and projects looking to run
                    validators to come and speak with them either on Discord
                    through their monkedao-ama channel or through a direct
                    message on MonkeDAO's Twitter. Both can be accessed through
                    the MonkeDAO website. MonkeDAO’s delegation strategy looks
                    first at helping DAO’s and community focused projects
                    breakeven on the cost of running their validator. They will
                    also track the performance of validators and may reduce
                    stake, if a validator becomes delinquent. MonkeDAO would
                    like to take a more “hands on, human” approach to help
                    validators reach breakeven. If they saturate DAO run
                    validators, with available stake, they will then look to
                    allocate to other validators, trying to breakeven on running
                    costs.
                  </Item>
                </div>
              ) : null}
            </div>
            <div>
              <div className="bg-[#0e0d0d] p-3 rounded-md mb-2">
                <img className="w-16 mx-auto" src={Jpool} alt="" />
              </div>
              {showHello ? (
                <div>
                  <Item title="Delegation strategy">
                    JPool uses a smart strategy that selects top-performance
                    validators to ensure maximum APY for the pool’s delegators,
                    while avoiding the ones with high concentration of stake.
                    The stake is then distributed based on several parameters
                    aiming to improve Solana blockchain’s decentralization and
                    stability: Validator’s stake volume Total stake in the same
                    ASN and data center Total stake in the same country The
                    smart algorithm tracks performance and fee for every
                    validator and performs stake redistribution as needed,
                    optimizing rewards by leveraging staking/withdrawal events
                    instead of deactivating pool’s staked SOL.
                  </Item>
                </div>
              ) : null}
              {!showHello ? (
                <div>
                  <Item title="How to get a delegation">
                    Validators are added to the pool based on its smart strategy
                    as the pool’s total stake grows. Validators may submit their
                    nodes for review by introducing themselves on the JPool
                    Telegram group. JPool looks for top-scoring validators who
                    are best for decentralization (validators who are not in the
                    most stake-concentrated ASNs, DCs, etc). JPool also looks
                    for the highest performance in terms of APR.
                  </Item>
                </div>
              ) : null}
            </div>
            <div>
              <div className="bg-[#f7f7f7f7] p-3 rounded-md mb-2">
                <img className="w-1/2 mx-auto" src={Lido} alt="" />
              </div>
              {showHello ? (
                <div>
                  <Item title="Delegation strategy">
                    Lido delegates all SOL staked to its pool evenly among the
                    validators in the Lido stake pool.
                  </Item>
                </div>
              ) : null}
              {!showHello ? (
                <div>
                  <Item title="How to get a delegation">
                    Lido’s procedure is outlined in the validator admission
                    process here and also copied below: "Lido maintains a set of
                    node operators who are responsible for running the
                    validators that support tokens staked with Lido. The
                    addition and removal of node operators will be voted on by
                    Lido community governance. Lido's node operators are voted
                    on by the DAO to ensure that the values of node operators
                    are aligned with the values of the Lido DAO. The reputation
                    and past performance history as the best-in-industry of
                    those interested in being operators is important because
                    they are responsible for validating the tokens staked via
                    Lido. To apply to be a Lido Node Operator, please follow the
                    process outlined below: Visit the Node Operator Landing Page
                    230 Submit an application via the Google Forms link for the
                    protocol that you are interested in being a node operator
                    for. Following successful submission of the above
                    information, the Lido Node Operator Sub-governance Group
                    (LNOSG) will review and evaluate your application and submit
                    a list of recommended applicants to the Lido DAO for
                    approval. Please note: The Lido DAO is ultimately
                    responsible for all additions and modifications to the Lido
                    Node Operator set; the LNOSG only serves to make proposals."
                  </Item>
                </div>
              ) : null}
            </div>
            <div>
              <div className="bg-[#f7f7f7f7] p-3 rounded-md mb-2">
                <img className="w-5/6 mx-auto" src={Marinade} alt="" />
              </div>
              {showHello ? (
                <div>
                  <Item title="Delegation strategy">
                    Marinade uses open-source code to compute a “score” awarded
                    to validators based on performance, commission and
                    decentralization objectives. For example, a validator will
                    get points added for good performance, low delinquency and
                    low commission, but will get all points deducted if it’s
                    already one of the top concentrated validators (measured by
                    stake) in the Solana ecosystem. Based on points received,
                    validators are automatically awarded a percentage of the
                    total stake. As users stake and unstake, Marinade bot
                    distributes stake and unstake operations as to match staked
                    percentage with score (i.e. changes in score are slowly
                    applied as users stake and unstake). Read more about
                    Marinade’s delegation strategy.
                  </Item>
                </div>
              ) : null}
              {!showHello ? (
                <div>
                  <Item title="How to get a delegation">
                    First, join the #validators channel in Marinade's Discord
                    (ask in #support to be added). There are several validator
                    operators there that will be able to help you. In order to
                    be added you need to meet the following performance
                    criteria: 3 epochs of good performance, low commission (less
                    than 11%), low data center concentration, and at least 100
                    SOL staked (from any source).
                  </Item>
                </div>
              ) : null}
            </div>
            <div>
              <div className="bg-[#0e0d0d] p-3 rounded-md mb-2">
                <img className="w-1/2 mx-auto" src={socean} alt="" />
              </div>
              {showHello ? (
                <div>
                  <Item title="Delegation strategy">
                    Socean allocates its funds via a transparent and principled
                    delegation strategy. They delegate funds to validators that
                    demonstrate a historical track record, are decentralized
                    (geographically, jurisdictionally and by data center), and
                    are not part of the minimum security group. They combine
                    analysis of validator performance with financial and
                    economic theory (mean-variance analysis, expected utility
                    theory) to maximise APY, minimise rewards variance, and
                    improve network health. For more details, have a look at the
                    validator whitepaper. In the future, they will produce
                    reports for the community to gain insight into their data
                    analyses, highlight trends in validator and cluster
                    performance, and shed light on updates to their allocation
                    logic. Read more about Socean's delegation strategy.
                  </Item>
                </div>
              ) : null}
              {!showHello ? (
                <div>
                  <Item title="How to get a delegation">
                    Socean is constantly collecting validator statistics from
                    on-chain. Validators will be automatically considered if
                    they meet Socean's performance metrics and are not in the
                    Minimum Security Group. Not being in the Minimum Security
                    Group means validators are not in the smallest group of
                    validators who collectively make up 33% of staked SOL and
                    validators are not in the top staked data centers who
                    cumulatively make up 33% of staked SOL (today this would be
                    16509-IE-Dublin, 16509-JP-Tokyo and 24940-DE-Falkenstein).
                    Read more about Socean’s delegation strategy.
                  </Item>
                </div>
              ) : null}
            </div>
            <div>
              <div className="bg-[#0e0d0d] p-3 rounded-md mb-2">
                <img className="w-5/6 mx-auto" src={EverSOL} alt="" />
              </div>
              {showHello ? (
                <div>
                  <Item title="Delegation strategy">
                    Socean allocates its funds via a transparent and principled
                    delegation strategy. They delegate funds to validators that
                    demonstrate a historical track record, are decentralized
                    (geographically, jurisdictionally and by data center), and
                    are not part of the minimum security group. They combine
                    analysis of validator performance with financial and
                    economic theory (mean-variance analysis, expected utility
                    theory) to maximise APY, minimise rewards variance, and
                    improve network health. For more details, have a look at the
                    validator whitepaper. In the future, they will produce
                    reports for the community to gain insight into their data
                    analyses, highlight trends in validator and cluster
                    performance, and shed light on updates to their allocation
                    logic. Read more about Socean's delegation strategy.
                  </Item>
                </div>
              ) : null}
              {!showHello ? (
                <div>
                  <Item title="How to get a delegation">
                    A validator can join the EverSOL pool if it demonstrates
                    great performance and does not belong to the super-minority
                    group (or Nakamoto coefficient). We evaluate the following
                    validator parameters: APY, commission, skipped slot, last
                    epoch stake size. Learn more about the details of the
                    EverSOL delegation strategy and a set of criteria required
                    to get a delegation. Validators can apply on Telegram or via
                    email to get a delegation and become a part of the pool.
                  </Item>
                </div>
              ) : null}
            </div>
            <div>
              <div className="bg-[#0e0d0d] p-3 rounded-md mb-2">
                <img className="w-5/6 mx-auto" src={Blaze} alt="" />
              </div>
              {showHello ? (
                <div>
                  <Item title="Delegation strategy">
                    BlazeStake aims to strike the right balance between
                    high-rewarding validators, high-scoring validators, and
                    smaller validators to ensure that we can help decentralize
                    the network without sacrificing on staking rewards. All of
                    our validators are hand-picked and evaluated by real humans,
                    not just selected by algorithms that might not understand
                    the whole picture. Any validator that is not within the
                    security group is instantly pre-qualified to join our stake
                    pool as long as it follows our guidelines.
                  </Item>
                </div>
              ) : null}
              {!showHello ? (
                <div>
                  <Item title="How to get a delegation">
                    Details for how validators can apply to the stake pool can
                    be found on the join page. The pool is open to any validator
                    outside of the superminority, and validators that have a
                    higher performance or higher score (based on factors like
                    how the validator contributes to decentralization) will
                    receive more stake. Validators just need to send a request
                    to the contact information on the join page, and they'll be
                    added along with the next batch of validators.
                  </Item>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeDelegation;
