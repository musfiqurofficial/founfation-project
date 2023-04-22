import { AboutItem } from "./AboutItem";

const AboutCore = () => {
  return (
    <div className="my-10">
      <div className="px-4 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h1 className="text-[72px] sm:text-[96px] font-semibold leading-none mb-10">
            Core
            <br /> Initiatives
          </h1>
          <div>
            <AboutItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCore;
