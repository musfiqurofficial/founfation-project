import ModalUI from "../../common/ModalUI";
import HeroAria from "./HeroAria";
import HomeCard from "./HomeCard";
import HomeCensorship from "./HomeCensorship";

const Home = () => {
  return (
    <>
      <ModalUI />
      <HeroAria />
      <div className="bg-[#ffffffe9] ">
        <HomeCard />
        <HomeCensorship />
      </div>
    </>
  );
};

export default Home;
