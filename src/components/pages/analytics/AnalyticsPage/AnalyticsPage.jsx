import React from 'react';
import Guidelines from './Guidelines';
import RequestforProposals from './RequestforProposals';
import ProcessOverview from './ProcessOverview';
import CriteriaForEvaluation from './CriteriaForEvaluation';
import AlternativeFundingSources from './AlternativeFundingSources';

const AnalyticsPage = () => {
    return (
       <div>
        <div className='flex'>
<div>
<div className='h-[4800px] bg-gray-400 w-[1px]'></div>
</div>
<div className='bg-white p-10'>
            <Guidelines></Guidelines>
            <hr className="max-w-screen-lg mx-auto my-24 border-t-2 border-gray-400" />

            <RequestforProposals></RequestforProposals>
            <hr className="max-w-screen-lg mx-auto my-24 border-t-2 border-gray-400" />

            <ProcessOverview></ProcessOverview>
            <hr className="max-w-screen-lg mx-auto my-24 border-t-2 border-gray-400" />

            <CriteriaForEvaluation></CriteriaForEvaluation>
            <hr className="max-w-screen-lg mx-auto my-24 border-t-2 border-gray-400" />

            <AlternativeFundingSources></AlternativeFundingSources>
            <hr className="max-w-screen-lg mx-auto my-24 border-t-2 border-gray-400" />
            <div className='mt-'>
                    <button type="button" class="text-white bg-blue-700 hover:bg-white border hover:border-blue-600 hover:text-blue-600 focus:ring-4  font-medium rounded-lg  text-[20px] px-6 py-3.5 text-center  ">Apply Now</button>

                    </div>
        </div>
        </div>
       </div>
    );
};

export default AnalyticsPage;