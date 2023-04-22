const DelegationHero = () => {
  return (
    <div className="mt-5 lg:mt-20 mb-10 mx-4">
      <div className="px-5 py-5 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg 2xl:lg:max-w-screen-xl md:px-24 lg:px-10 bg-gradient rounded-xl shadow-2xl">
        <div className="flex-none sm:flex justify-around items-center text-white">
          <h1 className="text-[32px] sm:text-[56px] font-semibold leading-none mb-5 sm:mb-0">
            Delegation Program
          </h1>
          <div className="text-lg flex flex-col gap-2">
            <a
              href="http://"
              target="_blank"
              className="border border-white px-3 py-2 rounded-md font-medium hover:bg-white hover:text-black"
              rel="noopener noreferrer"
            >
              Check status
            </a>
            <a
              href="http://"
              target="_blank"
              className="border border-white px-3 py-2 rounded-md font-medium hover:bg-white hover:text-black"
              rel="noopener noreferrer"
            >
              Apply now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelegationHero;
