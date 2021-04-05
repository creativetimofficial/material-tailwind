import React from "react";
import H3 from "components/Typography/Heading3";
import Icon from "components/Icon/Icon";

export default function ProfileContentBody() {
  return (
    <div className="text-center my-8">
      <H3 color="gray">Jenna Stones</H3>
      <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
        <Icon name="place" size="xl" />
        Los Angeles, California
      </div>
      <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
        <Icon name="work" size="xl" />
        Solution Manager - Creative Tim Officer
      </div>
      <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
        <Icon name="account_balance" size="xl" />
        University of Computer Science
      </div>
    </div>
  );
}
