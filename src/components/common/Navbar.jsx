import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/solana_foundation_dark_letters_only.d4426ab4.svg";
import LogoIcon from "../../assets/solana_foundation_colored_logo_only.124d9acc.svg";
import { CiLight, CiDark } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let activeStyle = {
    color: "#444bcb",
    fontWeight: "600",
  };

  const menuItem = (
    <>
      <li>
        <NavLink
          to="/about"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/delegation-program"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          DELEGATION PROGRAM
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/analytics"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          GRANTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/server-program"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          SERVER PROGRAM
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stake-pools"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          STAKE POOLS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tour-de-sun"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          TOUR DE SUN
        </NavLink>
      </li>
      <li className="flex justify-center items-center gap-2">
        <button>
          <CiLight className="hover:fill-[#444bcb] w-5 h-5" />
        </button>
        <button>
          <CiDark className="hover:fill-[#444bcb] w-5 h-5" />
        </button>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <NavLink to="/" className="flex justify-center items-center gap-2">
            <img className="" src={LogoIcon} alt="" />
            <img className="" src={Logo} alt="" />
          </NavLink>
          <ul className="items-center hidden font-[500] lg:flex">{menuItem}</ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/"
                        className="flex justify-center items-center gap-2"
                      >
                        <img className="" src={LogoIcon} alt="" />
                        <img className="" src={Logo} alt="" />
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">{menuItem}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <button className="hover:bg-[#1DBF73] border border-[#1DBF73] px-3 py-2 hover:font-[500] text-[#1DBF73] hover:text-[#FFFFFF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-sm">
                Get Started
              </button>
            </li>
          </ul> */
}
