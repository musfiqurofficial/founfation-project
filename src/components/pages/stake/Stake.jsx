import StakeDelegation from "./StakeDelegation";
import StakeHero from "./StakeHero";
import StakePromotes from "./StakePromotes";

const Stake = () => {
  return (
    <div>
      <StakeHero />
      <div className=" bg-[#ffffffe7] dark:bg-black">
        <StakePromotes />
        <StakeDelegation />
      </div>
    </div>
  );
};

export default Stake;
