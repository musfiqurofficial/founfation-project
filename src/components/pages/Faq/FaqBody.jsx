const FaqBody = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 pb-20">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:max-w-screen-lg mx-auto">
          {/* Overview */}
          <div>
            <h1 className="text-[28px] font-semibold faq-style">Overview</h1>
            <p className="text-sm pt-7">
              THESE FAQS ARE NOT BINDING AND DO NOT ESTABLISH ANY LEGAL
              COMMITMENTS FOR EITHER SOLANA FOUNDATION OR VALIDATORS.
              PARTICIPATION IN THIS INCENTIVE INITIATIVE IS SUBJECT TO A
              VALIDATOR’S AGREEMENT TO AND COMPLIANCE WITH SEPARATE TERMS
              SPECIFIED BY SOLANA FOUNDATION
            </p>
            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* What is Tour de Sun ' */}
          <div>
            <h1 className="text-[28px] font-semibold">
              What is Tour de Sun '22 (TdS22)?{" "}
            </h1>
            <p className="text-sm pt-7">
              In an effort to encourage the geographic and hardware
              diversification of the Solana networks, Solana Foundation is
              adding a new incentive delegation option for a limited number of
              validators who participate in the{" "}
              <a
                className="text-[#9111f1]"
                href="https://solana.org/delegation-program"
                target="_blank"
                rel="noopener noreferrer"
              >
                Foundation’s Delegation Program
              </a>
              .
            </p>
            <p className="text-sm pt-4">
              Solana Foundation is offering performance-based incentives to a
              limited number of eligible validators to run their testnet node in
              a selection of high-quality data centers.
            </p>
            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* Why is Solana Foundation doing this? */}

          <div>
            <h1 className="text-[28px] font-semibold">
              Why is Solana Foundation doing this?{" "}
            </h1>
            <p className="text-sm pt-7">
              Hosting companies and cloud providers have different policies
              applicable to the operation of blockchain software on their
              infrastructure. These policies may vary over time and across
              jurisdictional boundaries. To facilitate the decentralization,
              adoption and security of the Solana network, it is essential that
              the Solana network and community not become overly reliant on any
              single service provider or location.
            </p>
            <p className="text-sm pt-4">
              Through incentives offered through{" "}
              <a
                className="text-[#9111f1]"
                href="https://solana.org/tds22"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tour de Sun ’22
              </a>{" "}
              as well as the existing{" "}
              <a
                className="text-[#9111f1]"
                href="https://solana.org/server-program"
                target="_blank"
                rel="noopener noreferrer"
              >
                Server Program
              </a>
              , Solana Foundation encourages more validators and RPC operators
              to access infrastructure suited to the requirements of the Solana
              network. These relationships also help establish mutually
              beneficial connections between traditional hosting companies and
              Solana’s global community.
            </p>
            <p className="text-sm py-t">
              By correlating the incentive amount to a Testnet validator’s
              performance, we envision that more validators will be encouraged
              to learn and adopt better performance and monitoring practices for
              their nodes, resulting in a stronger operator population on
              Mainnet Beta.
            </p>
            <p className="text-sm pt-4">
              This incentive is available to a limited number of validators
              receiving stake from Solana Foundation on Testnet, even if an
              operator is not yet eligible to receive stake from Solana
              Foundation on Mainnet Beta. We hope this incentive will encourage
              more active engagement of the Testnet validator population who
              otherwise might choose not to run a node on Mainnet Beta until
              they are eligible for stake from Solana Foundation.
            </p>
            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>
          {/* Is this required to run a node?  */}

          <div>
            <h1 className="text-[28px] font-semibold">
              Is this required to run a node?{" "}
            </h1>
            <p className="text-sm pt-7">
              No. Solana Testnet and Mainnet Beta are permissionless.
            </p>
            <p className="text-sm pt-4">
              No registration or approval is required to run a node on Solana.
            </p>
            <p className="text-sm pt-4">
              Participation in this incentive program is optional and available
              for a limited number of eligible node operators in the Delegation
              Program.
            </p>
            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* Incentive Structure  */}

          <div>
            <h1 className="text-[35px] font-bold faq-style mb-5">
              Incentive Structure{" "}
            </h1>
            <h1 className="text-[28px] font-semibold">
              What are the incentives?{" "}
            </h1>
            <p className="text-sm pt-7">
              Eligible node operators can receive up to 2x the verified monthly
              hardware and networking cost of running their node in the form of
              a grant of locked SOL. Such payments and this incentive program
              may be modified, updated or terminated at any time, immediately
              upon notice from Solana Foundation, in Solana Foundation’s sole
              discretion.
            </p>
            <p className="text-sm pt-4">
              Payments will be made at the beginning of each month, and will
              cover the incentive earned in the previous month.
            </p>
            <p className="text-sm pt-4">
              Any distributed SOL will come as a stake account with a 12-month
              lock. This means the recipient of the stake account fully owns the
              SOL and can delegate their SOL as they wish but cannot withdraw,
              transfer or otherwise liquidate the SOL for at least 12 months
              from the date of each distribution.
            </p>
            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* How can I receive locked SOL? # */}
          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              How can I receive locked SOL?{" "}
            </h1>
            <p className="text-sm pt-7">
              See{" "}
              <a
                className="text-[#9111f1]"
                href="https://solana.org/tds22/faq#wallet_setup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wallet Setup section
              </a>{" "}
              for information.
            </p>
            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>
          {/* What are the requirements? # */}
          <div>
            <h1 className="text-[28px] font-semibold">
              What are the requirements? #{" "}
            </h1>
            <p className="text-sm pt-7">
              There are currently two main requirements in order to be eligible
              to receive the TdS22 incentive:
            </p>
            <p className="text-sm mt-4">
              1. Node operators must run their Testnet node on one of the
              servers available from the following provider:
              <p className="text-sm ml-7 mt-2">
                <a
                  className="text-[#9111f1]"
                  href="https://edgevana.com/solana-validator-servers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://edgevana.com/solana-validator-servers
                </a>
              </p>
            </p>
            <p className="text-sm mt-4">
              2. Node operators must earn Bonus level stake on their Testnet
              node according to the Delegation Program’s{" "}
              <a
                className="text-[#9111f1]"
                href="https://solana.org/delegation-criteria"
                target="_blank"
                rel="noopener noreferrer"
              >
                staking criteria
              </a>
              .
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* How many SOL tokens will be provided? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              How many SOL tokens will be provided?{" "}
            </h1>
            <p className="text-sm pt-7">
              The monthly incentive earned is directly proportional to the
              number of epochs from which the node operator earns Bonus level
              stake from the Delegation Program while operating an eligible
              server. For example, if there are 15 epochs in the month, and the
              eligible node earns Bonus stake in 10 of those epochs, the
              operator would receive up to 10/15, or 66.7% of the total maximum
              incentive for that month.
            </p>

            <p className="text-sm mt-4">
              The number of SOL tokens payable to an eligible participant will
              be determined using the time-weighted closing average price per
              SOL token for the preceding month, as reported on{" "}
              <a
                className="text-[#9111f1]"
                href="https://www.coingecko.com/en/coins/solana/historical_data"
                target="_blank"
                rel="noopener noreferrer"
              >
                CoinGecko
              </a>
              .
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* How are server costs calculated? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              How are server costs calculated?{" "}
            </h1>

            <p className="text-sm mt-4">
              Pricing for{" "}
              <a
                className="text-[#9111f1]"
                href="https://edgevana.com/solana-validator-servers"
                target="_blank"
                rel="noopener noreferrer"
              >
                eligible servers is available here.
              </a>
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* Who is eligible?  */}
          <div>
            <h1 className="text-[28px] font-semibold"> Who is eligible? </h1>

            <p className="text-sm mt-4">
              Any node operator who has registered for Solana Foundation
              <a
                className="text-[#9111f1]"
                href="https://solana.org/delegation-program"
                target="_blank"
                rel="noopener noreferrer"
              >
                Delegation Program
              </a>{" "}
              and who are currently eligible to earn stake on Testnet from
              Solana Foundation can participate in TdS22. Interested node
              operators can request to{" "}
              <a
                className="text-[#9111f1]"
                href="https://solana.org/tds22"
                target="_blank"
                rel="noopener noreferrer"
              >
                sign up for TdS22 here
              </a>
              .
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>
          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              Is there a limit to incentives/participants?{" "}
            </h1>

            <p className="text-sm mt-4">
              All delegation program participants on Testnet who operate an
              eligible server can participate in Tds22 as long as servers are
              available{" "}
              <a
                className="text-[#9111f1]"
                href="https://edgevana.com/solana-validator-servers"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </a>{" "}
              All operators must complete the sign up process, including
              agreeing to applicable terms and conditions specified by Solana
              Foundation. Solana Foundation may in its sole discretion limit the
              incentive pool at a later date.
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* How are epochs that roll over into a new month counted? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              How are epochs that roll over into a new month counted?{" "}
            </h1>

            <p className="text-sm mt-4">
              An epoch that straddles two months will be counted for the month
              in which that epoch ends. Therefore the last full epoch in a given
              month will be the last one counted for that month’s incentive
              calculations.
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* Getting Started # */}
          <div>
            <h1 className="my-5 text-[45px] font-semibold faq-style">
              {" "}
              Getting Started{" "}
            </h1>
            <h1 className="text-[28px] font-semibold"> How do I sign up? </h1>

            <ol className="list-decimal list-inside my-3 space-y-3">
              <li>
                Make sure you have first{" "}
                <a
                  className="text-[#9111f1]"
                  href="https://solana.org/delegation-program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  signed up for the Solana Foundation Delegation Program.
                </a>
              </li>
              <li>
                Request to participate in
                <a
                  className="text-[#9111f1]"
                  href="https://solana.org/tds22/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TdS22 here.
                </a>
              </li>
              <li>
                Visit
                <a
                  className="text-[#9111f1]"
                  href="https://edgevana.com/solana-validator-servers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  https://edgevana.com/solana-validator-servers
                </a>
                to provision an eligible server.
              </li>
              <li>
                Start running your testnet validator on your new server. Once
                your testnet validator has been running for 1-2 days, you will
                see your eligibility status updated on your validator status
                page within the
                <a
                  className="text-[#9111f1]"
                  href="https://solana.org/validators-search"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Solana Foundation Delegation Program site.
                </a>
              </li>
            </ol>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>
          {/* Where can I see my current eligibility? # */}
          <div>
            <h1 className="text-[28px] font-semibold">
              Where can I see my current eligibility?
            </h1>

            <p className="text-sm mt-4">
              Paste your validator’s identity pubkey in the{" "}
              <a
                className="text-[#9111f1]"
                href="https://solana.org/validators-search"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Delegation Program search.
              </a>{" "}
              Once you have started your Testnet validator on an eligible
              server, you will see an indicator showing the epochs for which
              that node has earned the extra incentive. Please note this may
              take a few epochs to show up.
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* Wallet Setup # */}

          <div>
            <h1 className="my-5 text-[45px] font-semibold faq-style">
              Wallet Setup{" "}
            </h1>
            <h1 className="text-[28px] font-semibold">
              Why do I need to create a new wallet? #
            </h1>

            <p className="text-sm mt-4">
              Any incentives earned for TdS22 will be issued as a locked stake
              account to an address on Mainnet Beta. To confirm eligible
              validators can receive earned incentives, validators must create
              and verify a new wallet address that is compatible with receiving
              locked stake accounts as part of the sign-up flow.
            </p>
            <p className="text-sm mt-4">
              Note: Participants are responsible for ensuring that the wallet
              address they provide is entered correctly and is capable of
              managing locked stake accounts. Participants are responsible for
              keeping their wallet secure and backed up. Solana Foundation
              cannot assist any participant who loses their private keys, has
              their private keys stolen (or whose wallet is otherwise
              compromised), or submits a wallet address that cannot manage
              locked stake accounts. Solana Foundation will not be responsible
              for any such losses and, incentive payments will not be
              transferred, duplicated or otherwise repaid in the event of a lost
              or compromised wallet. You are solely responsible for ensuring
              that any wallet you use is secure and that its seed phrase is
              backed up. If you lose access to your wallet key, any incentives
              issued to such address, and any associated staking rewards, will
              be lost permanently.
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>
          {/* What is a locked stake account/locked SOL? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              What is a locked stake account/locked SOL?
            </h1>

            <p className="text-sm mt-4">
              A locked stake account is a stake account which is created on
              Solana, in which tokens can be deposited but cannot be withdrawn
              before a fixed date, called the unlock date. The ownership of a
              locked stake account cannot be transferred until the unlock date.
              A single wallet can hold multiple locked stake accounts. It is
              extremely important (i) that any wallet receiving a locked stake
              account and its private keys are securely created and backed up
              and (ii) that the wallet is capable of managing locked stake
              accounts.
            </p>
            <p className="text-sm mt-4">
              As soon as the unlock date occurs for a particular locked stake
              account, tokens in the corresponding stake account can be
              withdrawn or transferred.
            </p>
            <p className="text-sm mt-4">
              Tokens in a locked stake account can be delegated to any validator
              and accrue potential staking rewards. Staking rewards accrued that
              correspond to a locked account are also locked until the unlock
              date.
            </p>
            <p className="text-sm mt-4">
              For more information about stake account structure, please see the
              <a
                className="text-[#9111f1]"
                href="https://docs.solana.com/staking/stake-accounts"
                target="_blank"
                rel="noopener noreferrer"
              >
                 Official Solana Docs. authority
              </a>
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* How can I receive a locked stake account? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              How can I receive a locked stake account?
            </h1>

            <p className="text-sm mt-4">
              Set up a compatible wallet and provide that wallet’s address
              (pubkey) when you sign up for the TdS22. When incentive
              distributions are made to participants, Solana Foundation will
              create a new locked stake account containing the incentives earned
              for the given month. The wallet address you provide will be set as
              the{" "}
              <a
                className="text-[#9111f1]"
                href="https://docs.solana.com/staking/stake-accounts#understanding-account-authorities"
                target="_blank"
                rel="noopener noreferrer"
              >
                stake and withdraw authority
              </a>{" "}
              of this new locked stake account. As the holder of the authority
              keys, the wallet owner will have full control over the stake
              account.
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* What types of wallets are compatible? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              What types of wallets are compatible? #
            </h1>

            <p className="text-sm pt-4">
              The Solana command line tools or SolFlare are the only wallets
              that are capable of receiving and manipulating locked stake
              accounts. Either of these options can be used with or without a
              Ledger Nano hardware wallet.
            </p>
          </div>

          {/* How do I verify my wallet address? # */}
          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              How do I verify my wallet address?
            </h1>

            <p className="text-sm mt-4">
              Once you have created a wallet that will be used for any
              incentives you may receive, you will be asked to sign a message
              containing your wallet’s address as part of the sign up process
              for TdS22.
            </p>
            <p className="text-sm mt-4">
              You must sign the message using the keypair file that you used to
              register your Mainnet Beta validator identity when you signed up
              for Solana Foundation Delegation Program.
            </p>
            <p className="text-sm mt-4">
              The message signature is not broadcast to Solana network as a
              transaction, so your chosen wallet address will not be publicly
              associated with your validator identity.
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>
          {/* How do I sign a message with my validator key? # */}
          <div></div>

          {/* Other # */}

          <h1 className="my-5 text-[45px] font-semibold faq-style"> Other </h1>

          {/* Where can I get help? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              Where can I get help?
            </h1>

            <p className="text-sm mt-4">
              After reading through these FAQs, if you have more questions,
              please ask them in the #delegation-program channel in the{" "}
              <a
                className="text-[#9111f1]"
                href="https://discordapp.com/invite/pquxPsq"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solana Tech discord
              </a>
              .
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* How does this incentive impact my node's stake from Solana Foundation? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              How does this incentive impact my node's stake from Solana
              Foundation?
            </h1>

            <p className="text-sm mt-4">
              Earning any TdS22 incentive does not change the amount of stake
              you may receive from Solana Foundation on Testnet or Mainnet Beta.
              It also does not alter the onboarding timing for newer validators
              who are not yet eligible to receive a stake delegation from Solana
              Foundation on their Mainnet Beta node.
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>

          {/* Can I receive the incentive if I am not in the Delegation Program? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              Can I receive the incentive if I am not in the Delegation Program?{" "}
            </h1>

            <p className="text-sm mt-4">
              No. At this time, participation in the Delegation Program is
              required to participate in TdS22.
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>
          {/* Can I sign up for a server without the incentive? # */}

          <div>
            <h1 className="text-[28px] font-semibold">
              {" "}
              Can I sign up for a server without the incentive?{" "}
            </h1>

            <p className="text-sm mt-4">
              Yes! Anyone who wants to run a validator or RPC node on Solana can
              take advantage of the offerings from numerous data center
              providers. More information{" "}
              <a
                className="text-[#9111f1]"
                href="https://solana.org/server-program"
                target="_blank"
                rel="noopener noreferrer"
              >
                can be found here.
              </a>
            </p>

            <hr className="max-w-screen-lg mx-auto border-t my-7 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqBody;
