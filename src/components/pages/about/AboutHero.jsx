const AboutHero = () => {
  return (
    <div className="my-20">
      <div className="px-4 py-5 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 bg-gradient rounded-xl shadow-2xl">
        <div className="flex justify-around items-center text-white">
          <h1 className="text-[56px] font-bold leading-none">Mission <br /> Statement</h1>
          <p className="text-lg">
            Help build the Solana protocol into the most censorship resistant
            network in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
