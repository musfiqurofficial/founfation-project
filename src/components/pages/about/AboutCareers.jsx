const AboutCareers = () => {
  return (
    <div>
      <div className="px-4 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 text-center">
        <button className="px-3 py-0 rounded-full bg-[#f2f2f2f7] border border-[#e4e4e4f7] cursor-text">
          CAREERS
        </button>
        <h1 className="text-[100px] font-semibold leading-tight">
          Solana is growing. <br />
          Grow with us.
        </h1>
        <p className="my-5 ">
          Help us create economic access for entrepreneurs and <br /> enterprises all
          over the world.
        </p>
        <a
          href="https://boards.greenhouse.io/solanafoundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border text-[#000] border-[#000] hover:border-none hover:bg-white px-5 py-3 text-[20px] font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg">
            Open Network Roles
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutCareers;
