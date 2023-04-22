const DelegationHero = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="px-4 py-8 sm:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 bg-gradient rounded-xl shadow-2xl">
        <div className="flex justify-around items-center text-white">
          <h1 className="text-[56px] font-semibold leading-none">
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
