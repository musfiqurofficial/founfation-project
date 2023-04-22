const ServerHero = () => {
    return (
        <div className="sm:my-20 mx-4">
            <div className="px-4 py-5 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg 2xl:lg:max-w-screen-xl md:px-24 lg:px-10 bg-gradient rounded-xl shadow-2xl">
                <div className="flex-none sm:flex justify-around items-center text-white">
                    <h1 className="text-[42px] sm:text-[50px] font-bold leading-none px-6 mb-8 sm:mb-0">Server<br /> Program</h1>
                    <p className="text-lg px-9">
                        Get access to validator-ready servers with month-to-month contracts from some of the world’s top data center providers. This optional program gives decentralized system operators access to hardware usually reserved for larger organizations.
                        <div className="text-lg flex-row gap-2 mt-6">

                            <a
                                href="http://"
                                target="_blank"
                                className="border border-white px-3 py-2 rounded-md font-medium hover:bg-white hover:text-black"
                                rel="noopener noreferrer"
                            >
                                Sign up
                            </a>
                        </div>

                    </p>

                </div>

            </div>
        </div>
    );
};

export default ServerHero;
