import React from 'react';

function Experience() {
  return (
    <div className="sm:py-6">
      <div className="grid grid-cols-1 gap-10">
        {/* ProfitLabs Experience */}
        <div>
          <p className="text-lg font-semibold text-green-500">ProfitLabs</p>
          <p className="text-xs md:text-sm text-gray-500">August 2022 – October 2022 | Junior Frontend Developer & Graphic Designer | Remote</p>
          <ul className="list-disc list-inside mt-2 md:text-base text-sm">
            <li>Engineered an interactive contact form with custom validation, enhancing user satisfaction scores.</li>
            <li>Optimized responsive design, ensuring cross-device functionality and slashing mobile bounce rates.</li>
            <li>Orchestrated social media content creation, elevating follower interactions through visually compelling posts.</li>
          </ul>
        </div>

        {/* Achyutam Foods Experience */}
        <div>
          <p className="text-lg font-semibold text-green-500">Achyutam Foods</p>
          <p className="text-xs md:text-sm text-gray-500">January 2022 – March 2022 | Graphic Designer and Social Media Manager | Remote</p>
          <ul className="list-disc list-inside mt-2 md:text-base text-sm">
            <li>Created engaging graphics for social media platforms, boosting Instagram followers by 5000.</li>
            <li>Conceptualized storytelling campaigns highlighting brand values, elevating customer retention by 15%.</li>
            <li>Propelled direct sales through social media by 20%.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
