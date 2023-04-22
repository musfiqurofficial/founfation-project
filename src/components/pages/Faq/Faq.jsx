import FaqHero from "./FaqHero";
import FaqBody from "./FaqBody";

const Faq = () => {
  return (
    <div>
      <FaqHero></FaqHero>
      <div className="bg-[#ffffffe7]">
        <FaqBody></FaqBody>
      </div>
    </div>
  );
};

export default Faq;
