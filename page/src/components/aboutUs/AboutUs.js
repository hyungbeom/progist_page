import React from 'react';
import InfoCard from "../temp/InfoCard";

const AboutUs = () => {
    return (
        <div>
            <InfoCard
                width={200}
                img={'123'} title={'…not reliable due to a lack of resilience'}
                subTitle={'One single incident such as a ship getting stuck in the Suez Canal or a labor strike in a port shuts down major parts of global shipping, leads to massive congestion and ultimately causes damages in the billions in just a few days.'}
            />
        </div>
    );
};

export default AboutUs;