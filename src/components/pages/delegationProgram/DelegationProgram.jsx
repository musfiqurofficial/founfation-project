import DelegationHero from "./DelegationHero";
import DelegationQuestions from "./DelegationQuestions";
import DelegationText from "./DelegationText";
import { Delegationstap } from "./Delegationstep";
import DelegationStay from "./DelegtionStay";

const DelegationProgram = () => {
  return (
    <div>
      <DelegationHero />
      <div className="bg-[#ffffffe7]">
        <DelegationText />
        <Delegationstap />
        <DelegationStay />
      </div>
      <DelegationQuestions />
    </div>
  );
};

export default DelegationProgram;
