import AnalyticsHero from './AnalyticsHero';
import AnalyticBody from './AnalyticBody';

const Analytics = () => {
    return (
        <div>
            <AnalyticsHero></AnalyticsHero>
            <div className=' bg-[#ffffffe7] dark:bg-black'>
            <AnalyticBody></AnalyticBody>
            </div>
        </div>
    );
};

export default Analytics;