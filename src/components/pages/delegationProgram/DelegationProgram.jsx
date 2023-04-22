import DelegationHero from "./DelegationHero";
import DelegationText from "./DelegationText";
import { Delegationstap } from "./Delegationstep";

const DelegationProgram = () => {
  return (
    <div>
      <DelegationHero />
      <div className="bg-[#ffffffe7]"> 
        <DelegationText />
        <Delegationstap />
      </div>
    </div>
  );
};

export default DelegationProgram;
