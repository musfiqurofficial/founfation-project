import React from 'react';
import arrow from "../../../../assets/ar.png";


const CriteriaForEvaluation = () => {
    return (
        <div>
              <div>
        <h1 className="text-[50px] font-bold">Criteria For Evaluation</h1>
        <div className="flex mt-7 gap-5">
          <div>
            <img src={arrow} className="w-[180px] h-auto" />
          </div>
          <div className=''>
            <p className="text-[px]">
            We love to see a broad diversity of ideas in grant applications. But, there are a few things we look for in all grantees. When determining whether your project proposal fits the bill for a Foundation grant, be sure it meets the following criteria:
            </p>
            <div className='ml-10 mt-7'>
             <p className="text-[px]"><li><span className='underline underline-offset-4'>Open Source:</span> Not all projects require code, but they should be built in the spirit of open sourcing your learnings for everyone to learn from.</li></p>
             <p className="text-[px]"><li> <span className='underline underline-offset-4'>Public Good:</span>  We want to see a clear connection between your proposal and the value it generates for the broader Solana or global community.
</li></p>
             <p className="text-[px]"><li> <span className='underline underline-offset-4'>Show Ability to Execute:</span>  us how your team has the skills and potential to bring your proposal to life.

</li></p>
             <p className="text-[px]"><li> <span className='underline underline-offset-4'>Ability to Execute:</span>  Show us how your team has the skills and potential to bring your proposal to life.


</li></p>
             <p className="text-[px]"><li> <span className='underline underline-offset-4'> Unique Contribution:</span>  We’re inspired when we see projects that are additive. You don’t have to be the only one working on your project, but we encourage you to veer away from well-trodden ground and work on something relatively novel.



</li></p>
             <p className="text-[px]"><li> <span className='underline underline-offset-4'>  Clear Use of Funds:</span> We encourage you to be thoughtful about how much you’re requesting and present a clear plan for how the funding will help you accomplish your goals.




</li></p>
             <p className='my-12'>Grants are not:

</p>

<p className="text-[px]"><li> <span className='underline underline-offset-4'>  NFT marketing budgets:</span>  We love seeing the growth of the Solana NFT ecosystem, but grants aren’t for promoting individual drops.
</li></p>
<p className="text-[px]"><li> <span className='underline underline-offset-4'>   Substitutes for venture funding:</span> We do offer grants to venture-funded companies, and some grantees may eventually seek venture funding for their ideas. However, grants are not wholesale substitutions for a round of funding. They are aimed at enabling discrete projects that create a public good for the Solana ecosystem.

</li></p>
<p className="text-[px]"><li> <span className='underline underline-offset-4'>   Free money: </span>We believe passionately in the potential of open-source, decentralized blockchain technology, and specifically in the potential of the Solana network. We want to support people who are genuinely excited about that potential too, and want to dig in further. Please don’t abuse that.


</li></p>

            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default CriteriaForEvaluation;