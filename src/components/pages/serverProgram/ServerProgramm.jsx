import AboutProgramm from "./AboutProgramm";
import ServerHero from "./ServerHero";

const ServerProgramm = () => {
  return (
    <div>
      <ServerHero></ServerHero>
      <div className=" bg-[#ffffffe7] dark:bg-black">
        <AboutProgramm></AboutProgramm>
      </div>
    </div>
  );
};

export default ServerProgramm;
