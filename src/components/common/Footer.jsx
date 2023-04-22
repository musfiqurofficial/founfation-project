import { Link } from "react-router-dom";
import Logo from "../../assets/solana_foundation_logo_dark_full.2bf56950 (1).svg";

const Footer = () => {
  return (
    <div className="bg-[#444bcb]">
      <div className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 text-white">
          <div>
            <Link to="/" className="">
              <img className="" src={Logo} alt="" />
            </Link>
          </div>
          <div className="">
            <h2 className="text-[2rem] text-[#ebebec] mb-3">Community</h2>
            <div className="flex flex-col gap-2">
              <p>
                <a
                  href="https://forum.solana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Forums
                </a>
              </p>
              <p>
                <a
                  href="https://discord.com/invite/kBbATFA7PW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[2rem] text-[#ebebec] mb-3">Validators</h2>
            <div className="flex flex-col gap-2">
              <Link to="/delegation-program">Delegation Program</Link>

              <p>
                <a
                  href="https://github.com/solana-foundation/stake-o-matic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stake-o-Matic
                </a>
              </p>
              <p>
                <a
                  href="https://www.validators.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Validators.app
                </a>
              </p>
              <p>
                <a
                  href="https://solanabeach.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solana Beach
                </a>
              </p>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
          <div className="">
            <h2 className="text-[2rem] text-[#ebebec] mb-3">Resources</h2>
            <div className="flex flex-col gap-2">
            <p>
              <a
                href="https://jobs.ashbyhq.com/Solana%20Foundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Foundation Careers
              </a>
            </p>
            <p>
              <a
                href="https://jobs.solana.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network Careers
              </a>
            </p>
            <p>
              <a
                href="https://explorer.solana.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network Explorer
              </a>
            </p>
            <Link to="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div>
            <p className="text-center mt-20 text-[16px] font-light text-white">THE SOLANA FOUNDATION</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
