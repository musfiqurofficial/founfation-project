import { Link } from "react-router-dom";
import Img1 from "../../../assets/1.webp";
import Img2 from "../../../assets/2.webp";
import Img3 from "../../../assets/3.webp";
import Img4 from "../../../assets/5.webp";
import Img5 from "../../../assets/8.webp";
import AR from "../../../assets/ar.png";
import TourTimeLine from "./TureTimeLine";

export const TourStep = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:max-w-screen-lg mx-auto">
          <TourTimeLine />
        </div>
      </div>
    </div>
  );
};
