import DelegationHero from "./DelegationHero";
import DelegationQuestions from "./DelegationQuestions";
import DelegationText from "./DelegationText";
import { Delegationstap } from "./Delegationstep";
import DelegationStay from "./DelegtionStay";
("./VerticalTimeLine/VerticalTimelineElement");

const DelegationProgram = () => {
  return (
    <div>
      <DelegationHero />
      <div className="bg-[#ffffffe7] dark:bg-black">
        <DelegationText />
        <Delegationstap />
        <DelegationStay />
      </div>
      <DelegationQuestions />
    </div>
  );
};

export default DelegationProgram;
