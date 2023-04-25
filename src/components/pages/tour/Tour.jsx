import TourHero from "./TourHero";
import { TourStep } from "./TourStep";
import TourText from "./TourText";

const Tour = () => {
  return (
    <div>
      <TourHero />
      <div className="bg-[#ffffffe7] dark:bg-black">
        <TourText />
        <TourStep />
      </div>
    </div>
  );
};

export default Tour;
